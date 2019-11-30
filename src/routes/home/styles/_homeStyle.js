import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //   background: red;
  background-image: linear-gradient(red, white);
  padding: 40px;
  min-height: 1030px;
  min-width: 580px;
`;

export const Content = styled.div`
  height: 950px;
  width: 500px;
  border: 20px solid black;
  border-radius: 35px;
  background: white;
`;
