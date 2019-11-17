import React, { useState, useEffect, useRef } from "react"
import { Portfolio } from "./styles"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import Other from "../components/Other"
import Footer from "../components/Footer"
import "../App.css"

function App() {
	const menu = useRef(null)
	let menuPosition = null
	const projects = useRef(null)
	const other = useRef(null)
	const footer = useRef(null)
	const [fromTop, setFromTop] = useState(0)
	const [darkMode, setDarkMode] = useState(false)

	function handleScroll() {
		if (menuPosition && window.pageYOffset >= menuPosition) {
			setFromTop(100)
		} else {
			setFromTop((window.pageYOffset / menuPosition) * 100)
		}
	}

	function scrollToSection(section) {
		window.scrollTo(0, section.current.offsetTop - menu.current.offsetHeight)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		menuPosition = menu.current.offsetTop
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<Portfolio darkMode={darkMode}>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Menu
				ref={menu}
				darkMode={darkMode}
				fromTop={fromTop}
				scrollToTop={() => window.scrollTo(0, 0)}
				scrollToProjects={() => scrollToSection(projects)}
				scrollToInfo={() => scrollToSection(other)}
				scrollToContact={() => scrollToSection(footer)}
			/>
			<Projects
				ref={projects}
				darkMode={darkMode}
				menuFixed={fromTop === 100}
				menuHeight={menu && menu.current ? menu.current.offsetHeight : 0}
			/>
			<Other ref={other} darkMode={darkMode} />
			<Footer ref={footer} />
		</Portfolio>
	)
}

export default App
