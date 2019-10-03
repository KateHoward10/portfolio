import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 5vw;
  margin-top: ${props => (props.menuFixed ? props.menuHeight : 0)}px;
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
  @media screen and (max-width: 600px) {
    width: 80vw;
    font-size: 3vw;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => (props.darkMode ? "#fff" : "#000")};
  margin: 5px;
`

export const Image = styled.img`
  width: 15vw;
  @media screen and (max-width: 900px) {
    width: 24vw;
  }
  @media screen and (max-width: 600px) {
    width: 70vw;
  }
`

export const Emoji = styled.span`
  margin-right: 5px;
`
