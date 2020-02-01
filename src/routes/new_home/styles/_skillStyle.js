import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px;
  border: 1px solid #c6c0be;
  padding: 15px 5px;
`;

export const Item = styled.img`
  width: 75px;
  height: 65px;
  margin-bottom: 10px;
`;

export const ItemMore = styled.div`
  width: 75px;
  height: 65px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  align-items: center;
`;

export const Expertise = styled.div`
  margin: 15px;
`;

export const Box = styled.div`
  border: 1px solid #c6c0be;
  padding: 10px;
  display: flex;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

export const BoxLabel = styled.div`
  margin-left: 10px;
`;

export const Label = styled.div`
  font-family: 'Playfair Display', serif;
`;
