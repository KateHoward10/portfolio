import React from "react"
import { Container, Text } from "./styles"
import { FaHourglassStart } from "react-icons/fa"

const ComingSoon = ({ children }) => {
  return (
    <Container>
      <FaHourglassStart size="40" color="#FFF" />
      <Text>Coming soon!</Text>
      {children && <Text>{children}</Text>}
    </Container>
  )
}

export default ComingSoon
