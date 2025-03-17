import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { H4 } from 'components/shared/Dangerously';
import Cross from 'public/assets/img/layout/cross.svg';
import es from 'public/locales/es/newsletter.json';
import NamedForm from 'components/shared/NamedForm';
import { createContact } from 'utils/brevo';
import * as FacebookPixel from 'utils/facebookPixel';
import { useLenis } from 'utils/LenisContext';

const NewsletterPopup = () => {
  let newsletter = es.newsletter_component;
  const [showPopup, setShowPopup] = useState(false);
  const { stopScroll, startScroll } = useLenis();

  useEffect(() => {
    let timer1 = setTimeout(() => popupShow(), 13000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const onSubmit = (data) => {
    // Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      listIds: [2],
      updateEnabled: true,
      attributes: {
        SUBSCRIBED_FROM: 'popup',
      },
    });
    FacebookPixel.trackSubscribe(data.email);
  };

  const popupShow = () => {
    stopScroll();
    setShowPopup(true);
  };

  const unlockScreen = () => {
    startScroll();
    setShowPopup(false);
  };

  return (
    <>
      <NewsWrapper $clickable={showPopup} id="NewsletterPopup">
        <Border>
          <H4 className="max-w-[16ch]">{newsletter.title}</H4>
          <p>{newsletter.p}</p>
          <NamedForm
            id="newsletter"
            onSubmit={onSubmit}
            text={newsletter}
            successMarkup={<Message success>{newsletter.success.p}</Message>}
          />
          <CrossContainer className="card" onClick={unlockScreen}>
            <Cross />
          </CrossContainer>
        </Border>
      </NewsWrapper>
      <Background $visible={showPopup} onClick={unlockScreen} />
    </>
  );
};

export default NewsletterPopup;

const Background = styled.div<{ $visible: boolean }>`
  background-color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.$visible ? 0.6 : 0)};
  position: fixed;
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 13;
  transition: opacity 0.4s ease;
`;

const Message = styled.div<{ success: boolean }>`
  color: ${(p) => p.theme.colors.success};
  font-size: 1.8rem;
  padding-bottom: 5px;
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
  }
`;

const Border = styled.div`
  border: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground_lowest};
  background-color: ${(props) => props.theme.colors.background};
  padding: 8% 10% 10% 10%;
  border-radius: 30px;
  @media (max-width: 380px) {
    padding: 8% 8% 14% 8%;
  }
`;

const CrossContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  position: absolute;
  top: 2.4%;
  right: 3%;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    border 0.3s ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.accent};
    svg * {
      stroke: ${(props) => props.theme.colors.accent};
    }
  }
  svg {
    width: 100%;
    cursor: pointer;

    * {
      stroke: ${(props) => props.theme.colors.foreground_lower};
      stroke-width: 1;
      transition: stroke 0.3s ease;
    }
  }
`;

const NewsWrapper = styled.div<{ $clickable: boolean }>`
  pointer-events: ${(props) => (props.$clickable ? 'auto' : 'none')};
  opacity: ${(props) => (props.$clickable ? '1' : '0')};
  max-width: 440px;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    ${(props) => (props.$clickable ? 'translateY(0%)' : 'translateY(5%)')};
  font-weight: 100;
  position: fixed;
  transition:
    opacity 0.4s ease,
    transform 0.5s ease;
  z-index: 14;
  p {
    color: ${(props) => props.theme.colors.foreground_lower};
    padding-bottom: 20px;
  }
  h4 {
    color: ${(props) => props.theme.colors.accent};
    font-size: 3rem;
    font-weight: 300;
    line-height: 110%;
    margin-bottom: 5%;
  }
  input {
  }
  @media (max-width: 600px) {
    max-width: calc(100% - 36px);
    width: 100%;
    margin-left: 18px;
    margin-right: 18px;
    z-index: 100;
    left: 0;
    transform: translateX(0px) translateY(-50%);
    h4 {
      font-size: 2.5rem;
    }
  }
`;
