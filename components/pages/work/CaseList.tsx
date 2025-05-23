import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Fade } from 'react-awesome-reveal';
import LangContext from 'utils/LangContext';
import { P, H2 } from 'components/shared/Dangerously';
import BorderLink from 'components/shared/BorderedLink';
import Arrow from 'components/shared/Arrow';
import CaseGrid from './CaseGrid';

import p_cover_borgatta from 'public/assets/img/casestudies/borgatta/p_cover.jpg';
import p_cover_recupera from 'public/assets/img/casestudies/recupera/p_cover.jpg';
import p_cover_wellmee from 'public/assets/img/casestudies/wellmee/p_cover.jpg';
import p_cover_ladanzadelasfieras from 'public/assets/img/casestudies/ladanzadelasfieras/p_cover.jpg';
import p_cover_blockstem from 'public/assets/img/casestudies/blockstem/p_cover.jpg';
import p_cover_rahid from 'public/assets/img/casestudies/rahid/p_cover.jpg';

const coverArray: { a: string; c: StaticImageData }[] = [
  { a: 'borgatta', c: p_cover_borgatta },
  { a: 'recupera', c: p_cover_recupera },
  { a: 'wellmee', c: p_cover_wellmee },
  { a: 'ladanzadelasfieras', c: p_cover_ladanzadelasfieras },
  { a: 'blockstem', c: p_cover_blockstem },
  { a: 'rahid', c: p_cover_rahid },
];

interface StudyProps {
  link: string;
  title: string;
  tags: string;
}

interface SingleCaseProps extends StudyProps {
  locale: string;
}

function SingleCase({ link, title, tags, locale }: SingleCaseProps) {
  const cover = coverArray.find(({ a }) => a === link)?.c;

  const PortfolioLink = ({
    children,
    style,
  }: {
    children: React.ReactNode;
    style?: React.CSSProperties;
  }) => (
    <Link
      href={'/portafolio/' + link}
      as={locale === 'en' ? '/work/' + link : '/portafolio/' + link}
      locale={locale}
      style={style}
    >
      {children}
    </Link>
  );
  return (
    <CaseGrid>
      <PortfolioLink>
        <VidContainer>
          {locale === 'en' ? 'go to project' : 'visitar proyecto'}
          <div className="img_container">
            <Image
              src={cover}
              alt={link}
              placeholder="blur"
              fill
              sizes="(min-width: 700px) 50vw, 100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </VidContainer>
      </PortfolioLink>
      <Info>
        <PortfolioLink
          style={{ flexDirection: 'column-reverse', display: 'flex' }}
        >
          <Fade cascade damping={0.2}>
            <Hoverable>{title}</Hoverable>

            <SmallLogo
              src={`/assets/img/casestudies/${link}/p_logo.svg`}
              alt={`logo_${link}`}
            />
          </Fade>
        </PortfolioLink>
        <Flexed>
          <Fade>
            <P>{tags}</P>
          </Fade>
          <Fade style={{ alignContent: 'flex-end' }}>
            <PortfolioLink>
              {locale === 'en' ? 'go to project' : 'visitar proyecto'}
              <Arrow />
            </PortfolioLink>
          </Fade>
        </Flexed>
      </Info>
    </CaseGrid>
  );
}

function CaseList({
  limit,
  cases,
  locale,
}: {
  limit?: number;
  cases: StudyProps[];
  locale: string;
}) {
  return (
    <CaseStudiesWrapper>
      {(cases as StudyProps[]).map(function (study, index) {
        if (limit !== undefined && index + 1 > limit) {
          return null;
        } else {
          return (
            <SingleCase
              key={'case' + index}
              {...study}
              locale={locale}
              link={study.link}
              title={study.title}
              tags={study.tags}
            />
          );
        }
      })}
    </CaseStudiesWrapper>
  );
}

export default React.memo(CaseList);

const Hoverable = styled(H2)`
  ${BorderLink({ showLink: false })}
`;

const SmallLogo = styled.img`
  height: 35px;
  width: auto;
  display: block;
  margin-bottom: 12px;
  @media (max-width: 1000px) {
    height: 30px;
  }
  @media (max-width: 850px) {
    height: 25px;
  }
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

const Flexed = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    justify-content: flex-end;
    display: flex;
    font-size: 0;
  }
  p {
    margin-top: 4%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 115%;
    max-width: 500px;
    cursor: pointer;
    background-position: 0 5.8rem;
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
  a {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg {
          stroke: ${(props) => props.theme.colors.accent};
        }
      }
    }
  }
  span {
    align-self: flex-end;
    svg {
      align-self: flex-end;
      width: 50px;
      height: 40px;
      fill: none;
      stroke: ${(props) => props.theme.colors.foreground};
      stroke-width: ${(props) => props.theme.stroke};
      transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
  @media (max-width: 1160px) {
    h2 {
      font-size: 4rem;
      background-position: 0 5.1rem;
    }
  }
  @media (max-width: 950px) {
    h2 {
      font-size: 3.5rem;
      background-position: 0 4.4rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 780px) {
    h2 {
      font-size: 3rem;
      background-position: 0 3.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 700px) {
    div:nth-of-type(2) {
      margin-top: 5px;
    }
    h2 {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 600px) {
    span svg {
      border: 2px solid ${(props) => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      bottom: -5px;
      transition: 0.2s ease-out all;
      &:active,
      &:focus {
        border-color: ${(props) => props.theme.colors.accent};
        transform: scale(0.9);
      }
    }
  }
  @media (max-width: 500px), (max-height: 450px) {
    h2 {
      font-size: 2.4rem;
      background-position: 0 3.1rem;
    }
  }
`;

const VidContainer = styled.div`
  margin: 10%;
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  font-size: 0;
  transition: 0.3s ease all;
  will-change: transform;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(0.98);
      video,
      .img_container {
        transform: scale(1.05);
      }
    }
    img {
      transition: transform 0.3s ease-out;
      will-change: transform;
    }
  }
  &:focus,
  &:active {
    transform: scale(0.98);
    video,
    .img_container {
      transform: scale(1.05);
    }
  }
  img {
    transition: transform 0.3s ease-out;
    will-change: transform;
  }
  .img_container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    will-change: transform, opacity;
    transition:
      transform 0.3s ease-out,
      opacity 0.5s ease;
  }
  @media (max-width: 700px) {
    margin: 5% 5% 10px 5%;
    width: 90%;
    /* padding-bottom: 45%; */
  }
`;

const CaseStudiesWrapper = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;
