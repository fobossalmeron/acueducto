import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styled from "styled-components";
import Image from "next/image";
import cindy from "public/assets/img/layout/clients/cindy.jpg";
import karla from "public/assets/img/layout/clients/karla.jpg";
import rodrigo from "public/assets/img/layout/clients/rodrigo.jpg";

const cards = [
  {
    text: "No hay una sola persona que no me haya dicho que el trabajo que hicimos fue excepcional y que el diseño es uno limpio y sofisticado",
    person: "Karla Hernández",
    job: "CEO, Recupera",
    picture: karla,
  },
  {
    text: "Nos encontramos una nueva oportunidad de crecimiento. Con el trabajo de Acueducto estamos exponenciando nuestra oferta.",
    person: "Rodrigo Maldonado",
    job: "CEO, Rahid",
    picture: rodrigo,
  },
  {
    text: "La forma de trabajar de Acueducto su calidad me sorprendieron. Nuestros proyectos siempre han sido profesionales y eficientes.",
    person: "Cindy Borgatta",
    job: "CMO, Borgatta",
    picture: cindy,
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: -20,
  y: i * -4,
  scale: 1,
//   rot: -10 + Math.random() * 20,
  rot: i,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number, i:number) =>
  `perspective(200px) rotateX(0deg) rotateY(0deg) rotateZ(${(i - 3)/2}deg) scale(${1 - -r*.005}) translateX(${r*15}px)`;

function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (1500 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 200);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <QuotesSection>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={"deck"} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale, i], trans),
              //   backgroundImage: `url(${cards[i]})`,
            }}
          >
            <p className="text">{cards[i].text}</p>
            <Person>
              <Image
                src={cards[i].picture}
                width={100}
                height={100}
                alt={`${cards[i].person}, ${cards[i].job}`}
              />
              <p className="person">
                {cards[i].person} <span>{cards[i].job}</span>
              </p>
            </Person>
          </animated.div>
        </animated.div>
      ))}
    </QuotesSection>
  );
}

export default Deck;

const QuotesSection = styled.div`
margin-top:2.3rem;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  .deck {
    position: absolute;
    width: 600px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
  }

  .deck > div {
    background-color: #181a1b;
    border: 2px solid ${(p) => p.theme.colors.accent};
    will-change: transform;
    border-radius: 30px;
    cursor: grab;
    padding: 10%;
    .text {
      user-select: none;
      font-size: 2rem;
      color: ${(p) => p.theme.colors.foreground_low};
      position: relative;
      &::before,
      &::after {
        font-size: inherit;
        color: ${(p) => p.theme.colors.accent};
        position: absolute;
      }
      &::before {
        content: "“";
        left: -10px;
      }
      &::after {
        content: "“";
      }
    }
  }
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  user-select: none;
  img {
    border-radius: 300px;
    width: 50px;
    height: 50px;
  }
  .person {
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    span {
      color: ${(p) => p.theme.colors.accent};
      font-size: 1.4rem;
    }
  }
`;
