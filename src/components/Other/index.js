import React from "react"
import { Box, List, ListItem, Text } from "./styles"
import {
	FaLaptop,
	FaCode,
	FaMusic,
	FaMicrophoneAlt,
	FaBrain,
} from "react-icons/fa"

const Other = React.forwardRef(({ darkMode }, ref) => (
	<Box ref={ref} darkMode={darkMode}>
		<List>
			<ListItem>
				<FaCode />
				<Text>
					In January 2018 I enrolled on an intensive coding bootcamp at{" "}
					<a href="https://developme.training/">DevelopMe Training</a>, and
					haven’t looked back.
				</Text>
			</ListItem>
			<ListItem>
				<FaLaptop />
				<Text>
					I currently work at <a href="https://simpleweb.co.uk/">Simpleweb</a>{" "}
					in Bedminster.
				</Text>
			</ListItem>
			<ListItem>
				<FaMusic />
				<Text>
					When I’m not coding I enjoy lots of live music around Bristol, as well
					as a bit of creative writing and quite a few pub quizzes.
				</Text>
			</ListItem>
			<ListItem>
				<FaMicrophoneAlt />
				<Text>
					From about Oct ’16 to Sept ’17 I used to read the news on{" "}
					<a href="https://bcfmradio.com/">BCfm</a>
					’s breakfast show.
				</Text>
			</ListItem>
			<ListItem>
				<FaBrain />
				<Text>
					I have 1½ degrees in Psychology (the other ½ in Zoology) and am keen
					on all things UX.
				</Text>
			</ListItem>
		</List>
	</Box>
))

export default Other
