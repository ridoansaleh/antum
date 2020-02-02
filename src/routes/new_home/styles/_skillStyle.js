import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px;
  border: 1px solid #c6c0be;
  padding: 15px 5px;
  @media only screen and (min-width: 768px) {
    width: 600px;
    margin-left: calc((100vw - 600px) / 2);
    padding: 25px 0;
  }
`;

export const Item = styled.img`
  width: 75px;
  height: 65px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    width: 150px;
    height: 120px;
    margin: 10px;
  }
`;

export const ItemMore = styled.div`
  width: 75px;
  height: 65px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 150px;
    height: 120px;
    margin: 10px;
  }
`;

export const Expertise = styled.div`
  margin: 15px;
  @media only screen and (min-width: 768px) {
    width: 600px;
    margin-left: calc((100vw - 600px) / 2);
  }
`;

export const Box = styled.div`
  border: 1px solid #c6c0be;
  padding: 10px;
  display: flex;
  @media only screen and (min-width: 768px) {
    height: 90px;
  }
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  @media only screen and (min-width: 768px) {
    height: 80px;
    width: 120px;
  }
`;

export const BoxLabel = styled.div`
  margin-left: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Label = styled.div`
  font-family: 'Playfair Display', serif;
`;
