import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 980px;
  margin: auto;
  margin-top: ${props => (props.menuFixed ? props.menuHeight + 42 : 42)}px;
`

export const FilterContainer = styled.div`
  width: 100%;
  margin: 0 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const FilterButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px;
  margin: 4px;
  border-radius: 5px;
  box-shadow: inset 0 0 10px lightgrey;
  &:hover {
    box-shadow: inset 0 0 10px grey;
  }
  @media screen and (min-width: 500px) {
    width: 360px;
  }
`

export const FilterList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  box-shadow: 0 0 10px grey;
  position: absolute;
  z-index: 20;
  top: 16px;
  @media screen and (min-width: 500px) {
    width: 360px;
  }
`

export const Filter = styled.li`
  cursor: pointer;
  padding: 4px;
  background-color: ${props => props.selected ? "deepskyblue" : "transparent"};
  &:hover {
    background-color: deepskylue;
  }
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
  font-size: 15px;
  @media screen and (min-width: 500px) {
    width: 32vw;
    margin: 15px;
  }
  @media screen and (min-width: 900px) {
    width: 20vw;
  }
`

export const Link = styled.a`
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
    height: 15vw;
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
  display: flex;
  align-items: center;
`

export const CodeLink = styled.a`
  margin: 10px;
  display: flex;
  align-items: center;
  &:hover {
    color: deepskyblue;
  }
`
