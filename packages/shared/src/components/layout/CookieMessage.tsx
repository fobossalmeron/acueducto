import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BorderLink from '../shared/BorderedLink';
import Cookies from 'js-cookie';
import delayForLoading from '../../utils/delayForLoading';

const CookieMessage = React.memo(
  ({ t, hasLoaded }: { t: any; hasLoaded: boolean }) => {
    const [hasToConsent, setHasToConsent] = useState(false);
    const [showConsentMessage, setShowConsentMessage] = useState(true);

    const checkScroll = useCallback(() => {
      const layoutWrapper = document.querySelector(
        '#LayoutWrapper',
      ) as HTMLElement;
      if (
        (layoutWrapper && layoutWrapper.scrollTop > 100) ||
        window.scrollY > 100
      ) {
        document.body.onscroll = null;
        if (layoutWrapper) layoutWrapper.onscroll = null;
        checkForConsent();
        setShowConsentMessage(false);
      }
    }, []);

    const checkForConsent = useCallback(() => {
      const cookieValue = Cookies.get('showCookieMessage');
      setHasToConsent(cookieValue === undefined);
    }, []);

    const consentToCookies = useCallback(() => {
      Cookies.set('showCookieMessage', 'false');
      setHasToConsent(false);
    }, []);

    useEffect(() => {
      if (hasLoaded && showConsentMessage) {
        delayForLoading(800).then(() => {
          document.body.onscroll = checkScroll;
          const layoutWrapper = document.querySelector(
            '#LayoutWrapper',
          ) as HTMLElement;
          if (layoutWrapper) layoutWrapper.onscroll = checkScroll;
        });
      }
      return () => {
        document.body.onscroll = null;
        const layoutWrapper = document.querySelector(
          '#LayoutWrapper',
        ) as HTMLElement;
        if (layoutWrapper) layoutWrapper.onscroll = null;
      };
    }, [hasLoaded, showConsentMessage, checkScroll]);

    const tt = useMemo(() => t.cookie_message, [t.cookie_message]);

    return (
      <Wrapper $clickable={hasToConsent}>
        <Border>
          <Divider onClick={consentToCookies}>
            <Button>
              <span>{tt.title}</span>
            </Button>
            <CrossContainer />
          </Divider>
          <p>
            {tt.p}
            <Link href="/cookies" passHref legacyBehavior>
              <Hoverable>{tt.link}</Hoverable>
            </Link>
            {tt.p_continued}
          </p>
        </Border>
      </Wrapper>
    );
  },
);

CookieMessage.displayName = 'CookieMessage';

export default CookieMessage;

const Hoverable = styled.span`
  ${BorderLink({ showLink: true })}
`;

const Border = styled.div`
  border: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground_lowest};
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  border-radius: 20px;
  @media (max-width: 600px) {
    border-radius: 0 0 20px 20px;
  }
`;

const Button = styled.button`
  padding: 14px 0%;
  text-align: left;
  padding-left: 26px;
  width: calc(100% - 45px);
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
  border: 0;
  font-weight: 100;
  font-size: 1.8rem;
  border-right: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground_lowest};
  cursor: pointer;
  transition: 0.3s ease all;
  @media (max-width: 600px) {
    border-radius: 0;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.colors.success};
      color: ${(props) => props.theme.colors.background};
      span {
        background-size: 0 0;
      }
    }
  }
  @media (max-width: 600px) {
    &:active {
      background-color: ${(props) => props.theme.colors.success};
      color: ${(props) => props.theme.colors.background};
    }
  }
`;

const Divider = styled.div`
  border-bottom: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground_lowest};
  display: flex;
`;

const CrossContainer = styled.div`
  width: 55px;
  height: 45px;
  padding: 14px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 1px;
    background-color: white;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  cursor: pointer;

  @media (max-width: 600px) {
    padding-right: 10px;
    padding-left: 16px;
    &:active {
      &::before,
      &::after {
        transform-origin: center;
        transform: translate(-50%, -50%) scale(0.9) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) scale(0.9) rotate(-45deg);
      }
    }
  }
`;

const Wrapper = styled.div<{ $clickable: boolean }>`
  pointer-events: ${(props) => (props.$clickable ? 'auto' : 'none')};
  opacity: ${(props) => (props.$clickable ? '1' : '0')};
  max-width: 590px;
  width: 80%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%)
    ${(props) => (props.$clickable ? 'translateY(0%)' : 'translateY(5%)')};
  font-weight: 100;
  position: fixed;
  transition:
    opacity 0.4s ease,
    transform 0.5s ease;
  z-index: 12;
  p {
    font-size: 1.2rem;
    padding: 2.5% 4% 4% 4%;
  }
  @media (max-width: 600px) {
    p {
      padding: 3% 6% 5% 6%;
    }
    left: 0;
    transform: none;
    width: calc(100% - 36px);
    margin-left: 18px;
    margin-right: 18px;
    bottom: 18px;
    z-index: 100;
  }
`;
