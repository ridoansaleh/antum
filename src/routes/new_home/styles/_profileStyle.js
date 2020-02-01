import styled from 'styled-components';
import photoImg from '../assets/img-ridoan.png';

export const Wrapper = styled.section`
  height: 220px;
  background: #ff9c83;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: white;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const PhotoContainer = styled.div`
  border: 10px solid white;
  border-radius: 50%;
  height: 130px;
  width: 130px;
  position: absolute;
  bottom: -70px;
  left: calc((100% - 130px - 30px) / 2);
  background-image: url(${photoImg});
  background-size: 100%;
`;

export const Job = styled.div`
  font-family: 'Playfair Display', serif;
  text-align: center;
  position: relative;
  top: 70px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 75px;
  padding: 15px;
  @media only screen and (min-width: 360px) {
    padding: 15px 45px;
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
    margin: auto;
  }
`;

export const Link = styled.a`
  font-size: 13px;
  font-weight: bold;
  color: #000;
  font-family: 'Playfair Display', serif;
`;
