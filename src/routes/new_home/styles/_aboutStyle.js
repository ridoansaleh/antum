import styled from 'styled-components';

export const Container = styled.section`
  margin: 15px;
  font-family: 'Playfair Display', serif;
  border: 1px solid #c6c0be;
  padding: 10px;
  @media only screen and (min-width: 768px) {
    width: 600px;
    margin-left: calc((100vw - 600px) / 2);
  }
`;
