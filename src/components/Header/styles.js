import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  background-color: #8ee1dd;
  background: linear-gradient(
      127deg,
      hsla(220, 100%, 50%, 80%),
      transparent 90%
    ),
    linear-gradient(217deg, hsla(200, 100%, 40%, 75%), transparent 90%),
    linear-gradient(336deg, hsla(180, 100%, 40%, 75%), transparent 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 20px;
  @media screen and (min-width: 520px) {
    flex-direction: row;
  }
`

export const Image = styled(Img)`
  width: 60vw;
  height: 75vw;
  border-radius: 5px;
  object-fit: cover;
  margin: 40px 0 0;
  @media screen and (min-width: 500px) {
    width: 180px;
    height: 225px;
    float: left;
    margin: 25px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 520px) {
    display: block;
    text-align: left;
    margin: 20px;
  }
`

export const Intro = styled.div`
  max-width: 1080px;
  @media screen and (min-width: 540px) {
    padding-top: 20px;
  }
  @media screen and (min-width: 720px) {
    padding-top: 30px;
  }
`
