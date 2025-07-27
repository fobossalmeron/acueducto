import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Arrow from '../shared/Arrow';
const scrollToNext = (e) => {
    e.preventDefault();
    document.getElementById('removeArrow').scrollIntoView({ behavior: 'smooth' });
};
const ScrollIncentive = () => {
    const [show, setShow] = useState(false);
    // Showing and hiding of the arrow depending on scroll positing
    // (for the event listener)
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShow(false);
            window.removeEventListener('scroll', handleScroll);
        }
        else {
            setShow(true);
        }
    };
    //Adding and removing the event listener for the scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [show]);
    //Delay before showing arrow
    useEffect(() => {
        setTimeout(() => {
            if (window.scrollY < 200) {
                setShow(true);
            }
        }, 2000);
    }, []);
    return (_jsx(Container, { "$reveal": show, children: _jsx(Jumper, { onClick: scrollToNext, "$reveal": show, children: _jsx(Arrow, {}) }) }));
};
export default ScrollIncentive;
const jumping = keyframes `
  0%{
    transform: translateY(0)rotate(90deg);
  }
  20%{
    transform: translateY(0)rotate(90deg);
  }
  40%{
    transform: translateY(-10px)rotate(90deg);
  }
  50%{
    transform: translateY(0)rotate(90deg);
  }
  60%{
    transform: translateY(-5px)rotate(90deg);
  }
  80%{
    transform: translateY(0)rotate(90deg);
  }
  100%{
    transform: translateY(0)rotate(90deg);
  }
`;
const Jumper = styled.div `
  animation-name: ${(p) => (p.$reveal ? jumping : 'none')};
  transform: translateY(0) rotate(90deg);
  animation-duration: 1.5s;
  animation-play-state: running;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  pointer-events: ${(props) => (props.$reveal ? 'auto' : 'none')};
  cursor: pointer;
`;
const Container = styled.div `
  bottom: 50%;
  display: flex;
  z-index: 7;
  height: 100%;
  mix-blend-mode: exclusion;
  pointer-events: none;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 45px;
  padding-bottom: 65px;
  margin: 0px auto;
  max-width: 1500px;
  opacity: ${(props) => (props.$reveal ? 1 : 0)};
  transition: opacity 0.3s ease 1s;
  @media (max-width: 768px) {
    padding-left: 25px;
    justify-content: flex-start;
    padding-bottom: 40px;
  }
`;
