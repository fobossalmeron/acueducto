import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styled from "styled-components";
import Image from "next/image";
import cindy from "public/assets/img/layout/clients/cindy.jpg";
import karla from "public/assets/img/layout/clients/karla.jpg";
import rodrigo from "public/assets/img/layout/clients/rodrigo.jpg";

//Falta ver si cambiamos o no el paquete al nuevo

const cards = [
  {
    text: "No hay una sola persona que no me haya dicho que el trabajo que hicimos fue excepcional y el diseño sofisticado",
    person: "Karla Hernández",
    job: "CEO, Recupera",
    picture: karla,
  },
  {
    text: "Encontramos una nueva oportunidad de crecimiento. Con el trabajo de Acueducto estamos exponenciando nuestra oferta.",
    person: "Rodrigo Maldonado",
    job: "CEO, Rahid",
    picture: rodrigo,
  },
  {
    text: "Su forma de trabajo y la calidad del mismo nos sorprendió. Todo siempre fue profesional y muy eficiente.",
    person: "Cindy Borgatta",
    job: "CMO, Borgatta",
    picture: cindy,
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: i,
  delay: i * 100,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number, i: number) =>
  `perspective(200px) rotateX(0deg) rotateY(0deg) rotateZ(${i * -1.5}deg) scale(${1 - -r * 0.005}) translateX(0%)`;

function Deck({ isMobile }) {
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
        const x = isGone ? (500 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
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
        }, 400);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

  const leftCard = () => {
    let i = cards.length - 1 - gone.size;
    if (i < 0) {
      return;
    }

    gone.add(i);
    api.current[i].start({ x: !isMobile ? -1200 : -600 });

    if (gone.size === cards.length)
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 400);
  };

  const rightCard = () => {
    let i = cards.length - 1 - gone.size;
    if (i < 0) {
      return;
    }

    gone.add(i);
    api.current[i].start({ x: !isMobile ? +1200 : +400 });

    if (gone.size === cards.length)
      setTimeout(() => {
        gone.clear();
        api.start((i) => to(i));
      }, 400);
  };

  return (
    <QuotesSection>
      <Pin onClick={() => rightCard()} />
      <PinLeft onClick={() => leftCard()} />
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          className={"deck"}
          key={i}
          style={{
            x,
            y,
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale, i], trans),
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

const Pin = styled.span`
  width: 42px;
  height: 42px;
  position: relative;
  display: inline-block;
  transition: 0.3s ease all;
  position: absolute;
  right: -12%;
  z-index: 2;
  pointer-events: all;
  cursor: pointer;
  user-select: none;
  &::after {
    content: " ";
    position: absolute;
    left: 7px;
    top: 10px;
    border: solid ${(p) => p.theme.colors.accent};
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 9px;
    transform: rotate(-45deg);
    transition: 0.3s ease all;
  }
  &:hover,
  &:active {
    transform: scale(1.15);
  }
  @media (max-width: 720px) {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 40px;
    top: calc(110%);
    right: 30%;
    &::after {
      padding: 6px;
      top: 14px;
      left: 11px;
    }
  }
`;

const PinLeft = styled(Pin)`
  transform: rotate(180deg);
  left: -12%;
  right: unset;
  &:hover,
  &:active {
    transform: rotate(180deg) scale(1.15);
  }
  @media (max-width: 720px) {
    left: 30%;
  }
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  user-select: none;
  transform-origin: bottom left;
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

const QuotesSection = styled.div`
  /* margin-top: 8%; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4%;
  .deck {
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
    &:not(:last-of-type) {
      position: absolute;
      max-width: 92%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #181a1b;
      border: 2px solid ${(p) => p.theme.colors.accent};
      will-change: transform;
      border-radius: 30px;
      cursor: grab;
      padding: 10%;
      touch-action: none;
      .text {
        max-width: 680px;
        width: 100%;
        user-select: none;
        font-size: 2rem;
        display: inline;
        text-align: left;
        color: ${(p) => p.theme.colors.foreground_low};
        position: relative;
        margin-bottom: 5%;
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
  }

  @media (max-width: 900px) {
    .deck:not(:last-of-type) {
      /* max-width: 92%; */
    }
    .deck > div {
      min-height: 260px;

      .text {
        font-size: 1.8rem;
        max-width: 480px;
      }
      ${Person} {
        transform: scale(0.9);
      }
    }
  }
  @media (max-width: 850px) {
    .deck > div {
      ${Person} {
        transform: scale(0.85);
      }
    }
  }
  @media (max-width: 720px) {
    margin-bottom: 10%;
    .deck > div {
      min-height: 230px;
      padding: 8%;
    }
  }
  @media (max-width: 600px) {
    padding: 0 4%;
    .deck > div {
      min-height: 170px;
      padding: 5%;
      .text {
        font-size: 1.5rem;
        max-width: 410px;
      }
      ${Person} {
        transform: scale(0.75);
      }
    }
  }
  @media (max-width: 420px) {
    .deck > div {
      min-height: 183px;
      .text {
        margin-bottom: 0px;
      }
    }
  }
`;
