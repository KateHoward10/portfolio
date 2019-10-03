import styled from "styled-components"

export const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
`

export const Emoji = styled.span`
	font-size: 48px;
`

export const Text = styled.p`
	font-size: 20px;
	color: white;
	text-align: center;
`
