import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  TextContainer,
  Image,
  Intro
} from "./styles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          intro
        }
      }
      me: file(relativePath: { eq: "images/picture-of-me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <TextContainer>
        <Image fluid={data.me.childImageSharp.fluid} alt="Me" />
        <Intro>
          <h1>{data.site.siteMetadata.author}</h1>
          <p>{data.site.siteMetadata.intro}</p>
        </Intro>
      </TextContainer>
    </Container>
  )
}

export default Header
