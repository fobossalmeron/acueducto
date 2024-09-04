import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Span } from "components/shared/Dangerously";
import BorderLink from "components/shared/BorderedLink";
import { Button } from "components/shared/Button/Button";

interface ConsultoriaCTAProps {
  cta: any;
  diagnostico_cta?: boolean;
  price?: boolean;
}

const ConsultoriaCTA: React.FC<ConsultoriaCTAProps> = React.memo(({
  cta,
  diagnostico_cta,
  price,
}) => {
  return (
    <Container>
      <h2>{cta.title}</h2>
      {price ? (
        <Span>{`${cta.price} <em>${cta.sessions}</em>`}</Span>
      ) : (
        <span className="noPrice">elevemos tu negocio</span>
      )}
      <SpecialA>
        <Link href={"/contacto"}>
          <Button
            text={cta.submit}
            inverse
            className="clean"
            parentComponent="ConsultoriaCTA"
          />
        </Link>
      </SpecialA>
      {diagnostico_cta && (
        <Diagnostico>
          <Fade triggerOnce>
            <h2>{cta.title2}</h2>
            <p>
              <span>{cta.linktext}</span>
              <Link href={cta.link[0]}>{cta.link[1]}</Link>
              <span>{cta.linktext2}</span>
            </p>
          </Fade>
        </Diagnostico>
      )}
    </Container>
  );
}, () => true);

export default ConsultoriaCTA;

const SpecialA = styled.div`
  margin-bottom: 30px;
`;

const Container = styled.div`
  max-width: 450px;
  & > span {
    color: ${(p) => p.theme.colors.accent};
    font-size: 3rem;
    margin: 0 0 30px 0;
    display: flex;
    font-weight: 200;
    &.noPrice {
      font-size: 2.4rem;
      margin-bottom: 13px;
      em {
        margin-top: 9px;
      }
    }
    b {
      font-size: 1.8rem;
      margin-top: 13px;
      margin-left: 4px;
    }
    em {
      font-style: normal;
      color: ${(p) => p.theme.colors.foreground_low};

      font-weight: 100;
      font-size: 1.8rem;
      margin-top: 15px;
      line-height: 125%;
      margin-left: 20px;
    }
  }
  form {
    margin-bottom: 15%;
  }
  h2 {
    font-size: 3.2rem;
    line-height: 125%;
    font-weight: 100;
    margin: 4% 0 0;
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 1000px) {
    span.noPrice {
      font-size: 2rem;
      em {
        margin-top: 5px;
      }
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 2.2rem;
    }
    & > span {
      font-size: 2.5rem;
      b {
        font-size: 1.8rem;
        margin-top: 8px;
      }
      em {
        margin-top: 11px;
      }
    }
  }
  @media (max-width: 400px) {
    span.noPrice {
      margin-bottom: 15px;
      em {
        display: none;
      }
    }
  }
`;

const Diagnostico = styled.div`
  &:hover {
    background-image: none !important;
  }
  p {
    margin-top: 20px;
  }
  a {
    ${BorderLink({ showLink: true })}
  }
`;
