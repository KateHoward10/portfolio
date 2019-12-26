import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 5vw;
  margin-top: ${props => (props.menuFixed ? props.menuHeight + 42 : 42)}px;
`

export const Box = styled.div`
  width: 20vw;
  border-radius: 10px;
  box-shadow: 0 0 30px lightgrey;
  padding: 10px;
  text-align: center;
  margin: 10px;
  position: ${props => (props.comingSoon ? "relative" : "static")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  font-size: 15px;
  @media screen and (max-width: 900px) {
    width: 30vw;
  }
  @media screen and (max-width: 500px) {
    width: 80vw;
    font-size: 3vw;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  margin: 10px;
  width: 100%;
`

export const Heading = styled.h3`
  margin-top: 0;
`

export const Image = styled(Img)`
  height: 20vw;
  object-fit: cover;
  @media screen and (max-width: 900px) {
    height: 30vw;
  }
  @media screen and (max-width: 500px) {
    height: 80vw;
  }
`

export const CodeLink = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  margin: 5px;
  display: flex;
  align-items: center;
`
