import React, { useState, useEffect, useRef } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import Info from "../components/Info"
import Contact from "../components/Contact"
import "../App.css"

function App() {
	const menu = useRef(null)
	let menuPosition = null
	const projects = useRef(null)
	const info = useRef(null)
	const contact = useRef(null)
	const [fromTop, setFromTop] = useState(0)
	const [darkMode, setDarkMode] = useState(false)
	const [position, setPosition] = useState(0)
	const [activeSection, setActiveSection] = useState(null)

	function getOffset(section) {
		return section.current
			? section.current.offsetTop - menu.current.offsetHeight
			: null
	}

	function handleScroll() {
		if (menuPosition && window.pageYOffset >= menuPosition) {
			setFromTop(100)
		} else {
			setFromTop((window.pageYOffset / menuPosition) * 100)
		}
		const newPosition =
			window.pageYOffset + (menu.current ? menu.current.offsetHeight : 0)
		setPosition(newPosition)
		if (getOffset(projects) <= newPosition && newPosition < getOffset(info)) {
			setActiveSection("Projects")
		} else if (
			getOffset(info) <= newPosition &&
			newPosition < getOffset(contact) &&
			window.innerHeight + window.pageYOffset < document.body.offsetHeight
		) {
			setActiveSection("Info")
		} else if (
			getOffset(contact) <= newPosition ||
			window.innerHeight + window.pageYOffset >= document.body.offsetHeight
		)
			setActiveSection("Contact")
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		menuPosition = menu.current.offsetTop
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div
			className="portfolio"
			style={{ backgroundColor: darkMode ? "#111" : "#eee" }}
		>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Menu
				ref={menu}
				darkMode={darkMode}
				fromTop={fromTop}
				projectsOffset={getOffset(projects)}
				infoOffset={getOffset(info)}
				contactOffset={getOffset(contact)}
				activeSection={activeSection}
			/>
			<Projects
				ref={projects}
				darkMode={darkMode}
				menuFixed={fromTop === 100}
				menuHeight={menu && menu.current ? menu.current.offsetHeight : 0}
			/>
			<Info ref={info} darkMode={darkMode} />
			<Contact ref={contact} />
		</div>
	)
}

export default App
