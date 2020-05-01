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
	flex-direction: row;
	padding: 20px;
	width: 100%;
	@media screen and (max-width: 520px) {
		flex-direction: column;
		align-items: center;
	}
`

export const Image = styled(Img)`
	width: 60vw;
	height: 60vw;
	object-fit: cover;
	border-radius: 50%;
	margin: 25px 0 0;
	@media screen and (min-width: 500px) {
		width: 200px;
		height: 200px;
		float: left;
		shape-outside: circle(110px);
		margin: 25px;
	}
	@media screen and (min-width: 700px) {
		shape-outside: circle(120px);
	}
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
	text-align: center;
	@media screen and (min-width: 520px) {
		display: block;
		text-align: left;
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