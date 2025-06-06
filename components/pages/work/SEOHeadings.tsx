import styled from 'styled-components';
import { H1 } from 'components/shared/Dangerously';

export const SeoH1 = styled(H1)`
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 4px;
  line-height: 130%;
  font-weight: 100;
  @media (max-width: 630px) {
    font-size: 1rem;
  }
`;

export const SeoH2 = styled.h2`
  color: ${(props) => props.theme.colors.background};
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 3px;
  line-height: 140%;
  max-width: 670px;
  background-color: #f9fcfb;
  border: 1px solid #4da465;
  padding: 3%;
  border-radius: 20px;
  margin: 8% 5% 0 5%;
  &::before {
    content: '*';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 40px;
    color: #4da465;
    margin-bottom: 2px;
    margin-right: 4px;
    font-size: 22px;
  }
  @media (max-width: 1000px) {
    font-size: 1.3rem;
    border-radius: 40px;
  }
  @media (max-width: 630px) {
    font-size: 1.1rem;
    border-radius: 30px;
  }
  @media (max-width: 450px) {
    border-radius: 15px;
    margin: 8% 20px 0 20px;
  }
`;

export default SeoH1;
