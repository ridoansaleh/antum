import styled from 'styled-components';

export const Container = styled.section`
  margin: 15px;
  height: calc(100vh - 70px);
  overflow-y: scroll;
  @media only screen and (min-width: 768px) {
    width: 600px;
    height: calc(100vh - 90px);
    margin-left: calc((100vw - 600px) / 2);
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #c6c0be;
  padding: 15px 5px;
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

export const Expertise = styled.div``;

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
