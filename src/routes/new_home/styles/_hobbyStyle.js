import styled from 'styled-components';

export const Container = styled.section`
  margin: 15px 15px 45px 15px;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  @media only screen and (min-width: 768px) {
    width: 600px;
    height: calc(100vh - 90px);
    margin-left: calc((100vw - 600px) / 2);
  }
`;

export const Item = styled.div`
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 145px;
  border-radius: 5px;
  @media only screen and (min-width: 768px) {
    height: 220px;
  }
`;

export const Label = styled.div``;
