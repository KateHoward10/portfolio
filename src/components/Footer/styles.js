import styled from "styled-components";

export const Container = styled.div`
  background-color: #011e4c;
  padding: 5vw;
`;

export const Text = styled.p`
  margin: 10px;
  color: #FFF;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 10px;
  font-size: 16px;
  flex: 0.5;
`;

export const TextInput = styled.textarea`
  padding: 5px;
  margin: 10px;
  font-size: 16px;
  flex: 1;
  height: 10vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90vw;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 10px;
  font-size: 16px;
`;