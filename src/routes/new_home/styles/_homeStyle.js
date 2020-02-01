import styled from 'styled-components';

export const Container = styled.div``;

export const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 30px);
  padding: 15px;
`;

export const ActiveContent = styled.div`
  width: 70%;
  height: 30px;
  font-family: 'Playfair Display', serif;
  background: #ff9c83;
  color: white;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 3px;
`;

export const Arrow = styled.div`
  width: 20%;
  height: 30px;
  background: #ff9c83;
  padding: 0 5px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
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
