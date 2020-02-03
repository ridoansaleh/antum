import styled from 'styled-components';
import photoImg from '../assets/img-ridoan.png';

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    min-height: 696px;
  }
`;

export const Wrapper = styled.section`
  height: 220px;
  background: #ff9c83;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    height: 320px;
  }
`;

export const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: white;
  margin-bottom: 40px;
  text-transform: uppercase;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 70px;
  }
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
  @media only screen and (min-width: 768px) {
    height: 230px;
    width: 230px;
    left: calc((100% - 230px - 30px) / 2);
    bottom: -115px;
  }
`;

export const Job = styled.div`
  font-family: 'Playfair Display', serif;
  text-align: center;
  position: relative;
  top: 70px;
  @media only screen and (min-width: 768px) {
    top: 115px;
    font-size: 20px;
  }
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
    width: 360px;
    margin: auto;
    top: 120px;
  }
`;

export const Link = styled.a`
  font-size: 13px;
  font-weight: bold;
  color: #000;
  font-family: 'Playfair Display', serif;
  text-decoration: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
