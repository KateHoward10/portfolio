import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5vw;
`

export const Box = styled.div`
  width: 20vw;
  border-radius: 10px;
  box-shadow: 0 0 30px lightgrey;
  padding: 20px;
  text-align: center;
  margin: 10px;
  position: ${props => (props.comingSoon ? "relative" : "static")};
`

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  margin: 5px;
  vertical-align: center;
`

export const Image = styled.img`
  max-width: 20vw;
`
