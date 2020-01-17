import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
	background-color: #8ee1dd;
	background: linear-gradient(
			127deg,
			hsla(240, 100%, 36%, 90%),
			transparent 80%
		),
		linear-gradient(217deg, hsla(180, 100%, 36%, 90%), transparent 80%),
		linear-gradient(336deg, hsla(120, 100%, 36%, 90%), transparent 80%);
	display: flex;
	flex-direction: row;
	padding: 20px;
	width: 100%;
	@media screen and (max-width: 500px) {
		flex-direction: column;
		align-items: center;
	}
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	color: ${props => (props.darkMode ? "white" : "black")};
	margin: 20px;
	@media screen and (max-width: 500px) {
		text-align: center;
	}
`

export const Image = styled(Img)`
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-radius: 50%;
	margin: 25px;
	@media screen and (max-width: 500px) {
		width: 60vw;
		height: 60vw;
	}
`

export const ToggleContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Toggle = styled.label`
	width: 60px;
	height: 36px;
	border-radius: 18px;
	background-color: lightgrey;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 5px;
	box-shadow: inset 0 0 5px grey;
	justify-content: ${props => (props.darkMode ? "flex-end" : "flex-start")};
`

export const Hidden = styled.input`
	display: none;
`

export const Slider = styled.div`
	cursor: pointer;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 3px;
	box-shadow: 0 0 5px grey;
	background-color: ${props => (props.darkMode ? "navy" : "deepskyblue")};
`
