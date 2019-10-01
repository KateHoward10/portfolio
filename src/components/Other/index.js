import React from "react"
import { Box, List, Text, Emoji } from "./styles"

const Other = React.forwardRef(({ darkMode }, ref) => (
	<Box ref={ref} darkMode={darkMode}>
		<List>
			<Text>
				<Emoji role="img" aria-label="laptop">
					💻
				</Emoji>
				<span>
					In January 2018 I enrolled on an intensive coding bootcamp at{" "}
					<a href="https://developme.training/">DevelopMe Training</a>, and
					haven’t looked back.
				</span>
			</Text>
			<Text>
				<Emoji role="img" aria-label="red circle">
					⭕
				</Emoji>
				<span>
					I currently work at <a href="https://simpleweb.co.uk/">Simpleweb</a>{" "}
					in Bedminster.
				</span>
			</Text>
			<Text>
				<Emoji role="img" aria-label="guitar">
					🎵
				</Emoji>
				<span>
					When I’m not coding I enjoy lots of live music around Bristol, as well
					as a bit of creative writing and quite a few pub quizzes.
				</span>
			</Text>
			<Text>
				<Emoji role="img" aria-label="radio">
					📻
				</Emoji>
				<span>
					From about Oct ’16 to Sept ’17 I used to read the news on{" "}
					<a href="https://bcfmradio.com/">BCfm</a>
					’s breakfast show.
				</span>
			</Text>
			<Text>
				<Emoji role="img" aria-label="brain">
					🧠
				</Emoji>
				<span>
					I have 1½ degrees in Psychology (the other ½ in Zoology) and am keen
					on all things UX.
				</span>
			</Text>
		</List>
	</Box>
))

export default Other
