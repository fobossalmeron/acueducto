import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import BorderLink from '@acueducto/shared/components/shared/BorderedLink';
import CaseGrid from 'components/pages/work/CaseGrid';
import styled from 'styled-components';
import { Button } from '@acueducto/shared';

interface EntryPreviewProps {
  title: string;
  subtitle: string;
  excerpt: string;
  slug: string;
  featured?: boolean;
  reverse: boolean;
}

export const EntryPreview: React.FC<EntryPreviewProps> = ({
  title,
  subtitle,
  excerpt,
  slug,
  featured,
  reverse,
}) => {
  const LinkComplex: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => <Link href={'/blog/' + slug}>{children}</Link>;
  return (
    <CaseGrid reverse={reverse} early={850}>
      <LinkComplex>
        <Fade triggerOnce>
          <ImageContainer
            style={{
              backgroundImage: `url(/assets/img/articles/${slug}/header.svg)`,
            }}
          />
          <Fader />
        </Fade>
      </LinkComplex>
      <Info>
        <Fade triggerOnce>
          <div>{featured && <span>Artículo destacado</span>}</div>
          <LinkComplex>
            <H2overable>
              {title.charAt(0).toLowerCase() + title.slice(1)}
            </H2overable>
          </LinkComplex>
          <p className="subtitle">{subtitle}</p>
          <div>{featured && <p>{excerpt}</p>}</div>
          <CTA $featured={featured}>
            <Link href={'/blog/' + slug}>
              <Button text="Leer más" variant="primary" />
            </Link>
          </CTA>
        </Fade>
      </Info>
    </CaseGrid>
  );
};

const CTA = styled.div<{ $featured?: boolean }>`
  margin-top: ${(p) => (p.$featured ? '20%' : 0)};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.4s ease transform;
  transform: scale(1);
  will-change: transform;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.03);
    }
  }
  &:focus,
  &:active {
    transform: scale(1.05);
  }
  @media (max-width: 850px) {
    min-height: 200px;
    position: relative;
    margin: 5% 5% 10px 5%;
    width: 90%;
    padding-bottom: 36%;
  }
`;

const H2overable = styled.h2`
  ${BorderLink({ showLink: false })}
`;

const Info = styled.div`
  padding-left: 10%;
  a {
    text-decoration: none;
  }
  span:not(a span) {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.foreground_low};
    letter-spacing: 0.2rem;
  }
  h2,
  h4 {
    font-size: 4.4rem;
    font-weight: 200;
    line-height: 115%;
    max-width: 600px;
    cursor: pointer;
    background-position: 0 5.5rem;
  }
  .subtitle {
    font-size: 2.4rem;
    font-weight: 100;
    line-height: 115%;
    max-width: 490px;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 8%;
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
    max-width: 500px;
  }
  @media (max-width: 1400px) {
    h2,
    h4 {
      font-size: 4rem;
      background-position: 0 5.1rem;
    }
    .subtitle {
      font-size: 2rem;
    }
  }
  @media (max-width: 1250px) {
    h2,
    h4 {
      font-size: 3.5rem;
      background-position: 0 4.4rem;
    }
  }
  @media (max-width: 1100px) {
    h2,
    h4 {
      font-size: 3rem;
      background-position: 0 3.8rem;
    }
    .subtitle {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.6rem;
    }
    span:not(a span) {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 850px) {
    padding-left: 0px;
    max-width: 460px;
    display: flex;
    flex-direction: column;
    align-self: center;
    p,
    .subtitle {
      margin-bottom: 20px;
    }
    ${CTA} {
      margin-top: 0px;
    }
  }
  @media (max-width: 500px), (max-height: 450px) {
    h2,
    h4 {
      font-size: 2.4rem;
      background-position: 0 3.1rem;
    }
  }
`;

const Fader = styled.div`
  width: 100%;
  height: 30%;
  display: block;
  position: absolute;
  bottom: 0;
  background: ${(p) =>
    `linear-gradient( 0deg, ${p.theme.colors.background} 30%, ${p.theme.colors.background}00 100%)`};
`;
