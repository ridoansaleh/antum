import styled from 'styled-components';

export const Container = styled.section`
  margin: 15px;
  height: calc(100vh - 70px);
  font-family: 'Playfair Display', serif;
  padding: 10px;
  @media only screen and (max-height: 695px) {
    overflow-y: scroll;
  }
  @media only screen and (min-width: 768px) {
    width: 600px;
    height: calc(100vh - 90px);
    margin-left: calc((100vw - 600px) / 2);
    padding: 0;
  }
`;

export const Text = styled.div`
  border: 1px solid #c6c0be;
  padding: 10px;
  margin-bottom: 20px;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 27px;
  box-sizing: border-box;
  padding: 2px;
`;

export const Label = styled.div`
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 2px;
  box-sizing: border-box;
`;

export const Button = styled.input`
  background: #ff9c83;
  height: 30px;
  width: 100%;
  border: 1px solid #ff9c83;
  color: #fff;
  padding: 2px;
`;
