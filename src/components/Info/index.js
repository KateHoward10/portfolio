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
          <a href="https://developme.training/">DevelopMe Training</a>.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaLaptop color="red" />
        </IconContainer>
        <Text>
          I currently work at <a href="https://simpleweb.co.uk/">Simpleweb</a>{" "}
          in Bedminster.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaMusic color="green" />
        </IconContainer>
        <Text>
          When not coding I enjoy lots of live music around Bristol, as well as
          a bit of creative writing and quite a few pub quizzes.
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
          From about Oct ’16 to Sept ’17 I used to read the news on{" "}
          <a href="https://bcfmradio.com/">BCfm</a>
          ’s breakfast show.
        </Text>
      </ListItem>
      <ListItem>
        <IconContainer>
          <FaBrain color="pink" />
        </IconContainer>
        <Text>
          I have 1½ degrees in Psychology (the other ½ in Zoology) and am always
          keen to learn more about UX.
        </Text>
      </ListItem>
    </List>
  </Box>
))

export default Info
