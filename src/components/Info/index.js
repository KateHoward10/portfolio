import React from "react"
import { Box, List, ListItem, IconContainer, Text } from "./styles"
import {
  FaLaptop,
  FaCode,
  FaMusic,
  FaCheese,
  FaMicrophoneAlt,
  FaBrain,
} from "react-icons/fa"

const Info = React.forwardRef((props, ref) => (
  <Box ref={ref}>
    <List>
      <ListItem>
        <IconContainer>
          <FaCode color="purple" />
        </IconContainer>
        <Text>
          In March 2018 I completed an intensive coding bootcamp at{" "}
          <a className="link" href="https://developme.training/">DevelopMe Training</a>.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaLaptop color="red" />
        </IconContainer>
        <Text>
          I have worked most recently as a front end developer at <a className="link" href="https://www.outlookenergy.co.uk/">Outlook Energy</a>.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaMusic color="green" />
        </IconContainer>
        <Text>
          When not coding I enjoy lots of live music around Bristol, as well as creative writing, pub quizzing, designing tattoos, customising clothes and hanging out with my cat, Elsie.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaCheese color="orange" />
        </IconContainer>
        <Text>
          I was once the president of Bristol University Cheese Society.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaMicrophoneAlt color="dodgerblue" />
        </IconContainer>
        <Text>
          Back in 2017 I would regularly read the news on{" "}
          <a className="link" href="https://bcfmradio.com/">BCfm</a>
          ’s breakfast show.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaBrain color="pink" />
        </IconContainer>
        <Text>
          I have 1½ degrees in Psychology (the other ½ in Zoology) and am interested in UX, accessibility and visual perception.
        </Text>
      </ListItem>
    </List>
  </Box>
))

export default Info
