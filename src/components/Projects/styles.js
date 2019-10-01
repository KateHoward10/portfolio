import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5vw;
`;

export const Box = styled.div`
  background-color: rgba(255,255,255,0.8);
  width: 25vw;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  margin: 5px;
  vertical-align: center;
`;

export const Image = styled.img`
  max-width: 20vw;
`;