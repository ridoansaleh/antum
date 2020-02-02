import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
`;

export const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 30px);
  min-width: 320px;
  padding: 15px;
  @media only screen and (min-width: 768px) {
    width: 600px;
    margin-left: calc((100vw - 600px) / 2);
    padding: 0 0 15px;
  }
`;

export const ActiveContent = styled.div`
  width: calc(100% - 60px - 25px);
  height: 30px;
  font-family: 'Playfair Display', serif;
  background: #ff9c83;
  color: white;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 3px;
  @media only screen and (min-width: 768px) {
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    font-size: 20px;
  }
`;

export const Arrow = styled.div`
  width: 60px;
  height: 30px;
  background: #ff9c83;
  padding: 0 5px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    height: 50px;
  }
`;

const ArrowIcon = styled.div`
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  height: 10px;
  width: 10px;
`;

export const ArrowRight = styled(ArrowIcon)`
  transform: rotate(-45deg);
  border-color: ${props => (props.disabled ? '#cccccc' : '#fff')};
`;

export const ArrowLeft = styled(ArrowIcon)`
  transform: rotate(135deg);
  border-color: ${props => (props.disabled ? '#cccccc' : '#fff')};
`;
