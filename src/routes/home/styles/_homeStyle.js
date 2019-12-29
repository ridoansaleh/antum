import styled from 'styled-components';
import { BREAKPOINTS } from '../../../utils/devices';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 320px;
  padding: 10px;
  background-image: linear-gradient(red, white);
  box-sizing: border-box;
  @media only screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    min-height: 1030px;
  }
`;

export const Content = styled.div`
  height: 950px;
  width: 100%;
  border-radius: 35px;
  background: white;
  @media only screen and (min-width: ${BREAKPOINTS.PORTRAIT_TABLET}) {
    width: 80%;
  }
  @media only screen and (min-width: ${BREAKPOINTS.TABLET}) {
    width: 70%;
  }
  @media only screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
    border: 20px solid black;
    width: 500px;
  }
`;
