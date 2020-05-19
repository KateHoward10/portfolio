import styled from "styled-components"

export const Box = styled.div`
  max-width: 100vw;
  padding: 20px;
  padding-top: 20%;
  background: linear-gradient(32deg, hsla(210, 100%, 70%, 10%) 55%, hsla(220, 100%, 70%, 15%) 45%), linear-gradient(154deg, transparent 70%, hsla(210, 100%, 70%, 15%) 30%);
  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0% 100%);
	@media screen and (min-width: 420px) {
    padding-top: 30px;
    background: linear-gradient(9deg, hsla(210, 100%, 70%, 10%) 50%, hsla(220, 100%, 70%, 15%) 40%), linear-gradient(174deg, transparent 70%, hsla(210, 100%, 70%, 15%) 30%);
    clip-path: polygon(0 12%, 100% 0, 100% 100%, 0% 100%);
  }
`

export const List = styled.ul`
  max-width: 920px;
  list-style: none;
  padding: 0;
  margin: 4vw auto;
  background-color: transparent;
`

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
`

export const IconContainer = styled.div`
  width: 1.5rem;
  display: flex;
  justify-content: center;
  margin-top: 3px;
`

export const Text = styled.span`
  flex: 1;
  margin-left: 10px;
`
