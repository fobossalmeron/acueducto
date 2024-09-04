import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import LangContext from "utils/LangContext";
import { P } from "components/shared/Dangerously";

const Recursos: React.FC = () => {
  const context = useContext(LangContext);
  let t: { p: string; articles: string } = context.resources;
  return (
    <>
      <P className="separator">{t.p}</P>
      <RecursoCont>
        <Link href="/podcast" locale="es">
          <Image
            src="/assets/img/layout/recursopodcast.jpg"
            width={120}
            height={120}
            alt="cuando el río suena"
          />
          <span>podcast</span>
        </Link>
        <Link href="/blog" locale="es">
          <Image
            src="/assets/img/layout/recursoarticulo.jpg"
            width={120}
            height={120}
            alt="blog posts"
          />
          <span>{t.articles}</span>
        </Link>
      </RecursoCont>
    </>
  );
};

export default React.memo(Recursos);

const RecursoCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > a {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    text-decoration: none;
    img {
      border-radius: 25px;
      overflow: hidden;
      border: 2px solid transparent;
      transition: 0.3s ease all;
      height: 120px;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        img {
          border-color: ${(p) => p.theme.colors.accent};
        }
      }
    }
    span {
      margin-top: 10px;
      display: flex;
      font-weight: 200;
      font-size: 2rem;
    }
  }
`;