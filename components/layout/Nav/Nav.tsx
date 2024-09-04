import React, { useMemo, useEffect } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import {
  NavWrapper,
  NavList,
  NavLink,
  BottomNav,
  Registered,
  Social,
  Hoverable
} from "./Nav.styles";

interface NavProps {
  nav: Array<{ link: string; as?: string; title: string }>;
  isOpen: boolean;
  closeNav: () => void;
  locale: string;
}

interface ActiveLinkProps {
  children: React.ReactElement;
  href: string;
  as?: string;
  locale?: string;
}

const Nav: React.FC<NavProps> = ({ nav, isOpen, closeNav, locale }) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      nav.forEach((item) => {
        router.prefetch(item.link);
      });
    }
  }, [isOpen, router]);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      closeNav();
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router, closeNav]);

  // Usar useMemo para yearRoman
  const yearRoman = useMemo(() => {
    const year: number = new Date().getFullYear();
    const romanNumerals: Array<{ value: number; symbol: string }> = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];

    let result: string = '';
    let remaining: number = year;

    for (let i: number = 0; i < romanNumerals.length; i++) {
      while (remaining >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        remaining -= romanNumerals[i].value;
      }
    }

    return result;
  }, []); // Se recalcula solo cuando el componente se monta

  // Optimizar el renderizado condicional
  if (!isOpen) return <NavWrapper open={isOpen} id="Nav" />;

  return (
    <NavWrapper open={isOpen} id="Nav">
      <NavList>
        <ul>
          {nav.map((item, index) => (
            <li key={`item${index}`}>
              <Fade delay={200 + index * 50}>
                <span>0{index + 1}</span>
                <Link
                  href={item.link}
                  as={item.as ? item.as : item.link}
                  locale={locale}
                >
                  <NavLink $active={router.pathname === item.link}>
                    {item.title}
                  </NavLink>
                </Link>
              </Fade>
            </li>
          ))}
        </ul>
      </NavList>
      <BottomNav>
        <Registered>© {yearRoman} </Registered>
        <Social>
          <Hoverable
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/acueductostudio/"
          >
            linkedin
            <span>linkedin</span>
          </Hoverable>
          <Hoverable
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCuFV_fKt_ELREPwoAb5lprg"
          >
            youtube
            <span>youtube</span>
          </Hoverable>
        </Social>
      </BottomNav>
    </NavWrapper>
  );
};

export default React.memo(Nav);
