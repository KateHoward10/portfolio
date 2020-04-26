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
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px grey;
  padding: 10px;
  margin: 4vw 8vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  font-size: 15px;
  @media screen and (min-width: 500px) {
    width: 32vw;
    margin: 15px;
  }
  @media screen and (min-width: 900px) {
    width: 24vw;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  width: 100%;
`

export const Image = styled(Img)`
  height: 50vw;
  object-fit: cover;
  filter: brightness(90%);
  ${Link}:hover & {
    filter: brightness(100%);
    transition: filter 1s;
  }
  @media screen and (min-width: 500px) {
    height: 24vw;
  }
  @media screen and (min-width: 900px) {
    height: 18vw;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
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
