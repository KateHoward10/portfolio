import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
    width: 32vw;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 2vw 8vw;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  width: 100%;
`

export const Image = styled(Img)`
  height: 15vw;
  object-fit: cover;
  @media screen and (max-width: 900px) {
    height: 24vw;
  }
  @media screen and (max-width: 500px) {
    height: 60vw;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  padding: 5px;
`

export const Tag = styled.div`
  background: deepskyblue;
  color: white;
  padding: 5px;
  margin: 5px;
  font-size: 12px;
`

export const CodeLink = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  margin: 10px;
  display: flex;
  align-items: center;
  &:hover {
    color: deepskyblue;
  }
`
