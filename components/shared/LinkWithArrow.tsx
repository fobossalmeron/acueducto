import styled from "styled-components";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Span } from "components/shared/Dangerously";
import Arrow from "components/shared/Arrow";
import { useRouter } from "next/router";

function LinkWithArrow({
  link,
  linktext,
  as,
}: {
  link: string;
  linktext: string;
  as?: string;
}) {
  let router = useRouter();
  return (
    <Link href={link[0]} as={as} passHref locale={router.locale} legacyBehavior>
      <LinkContainer>
        <Fade triggerOnce>
          <p>
            <Span>{linktext}</Span> <b>{link[1]}</b>
          </p>
        </Fade>
        <Arrow />
      </LinkContainer>
    </Link>
  );
}

export default LinkWithArrow;

const LinkContainer = styled.a`
  text-decoration: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    padding-right: 15px;
  }
  b {
    color: ${(props) => props.theme.colors.foreground};
    font-weight: 100;
    border-bottom: ${(props) =>
      props.theme.stroke + " solid " + props.theme.colors.accent};
  }
  a span {
    align-self: flex-end;
    position: absolute;
    right: 0%;
  }
  &:hover {
    svg * {
      stroke: ${(props) => props.theme.colors.accent};
    }
  }
  @media (max-width: 600px) {
    svg {
      border: 2px solid ${(props) => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -5px;
    }
  }
`;
