import React, { useState, useEffect, useRef } from "react"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "../components/useDarkMode"
import { GlobalStyles } from "../components/globalStyles"
import { lightTheme, darkTheme } from "../components/Themes"
import ModeToggle from "../components/ModeToggle"
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
  const [activeSection, setActiveSection] = useState(null)
  const [darkMode, setMode] = useDarkMode()

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
    ) {
      setActiveSection("Contact")
    } else {
      setActiveSection(null)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    menuPosition = menu.current.offsetTop
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ModeToggle darkMode={darkMode} setDarkMode={setMode} />
      <Header />
      <Menu
        ref={menu}
        fromTop={fromTop}
        projectsOffset={getOffset(projects)}
        infoOffset={getOffset(info)}
        contactOffset={getOffset(contact)}
        activeSection={activeSection}
      />
      <Projects
        ref={projects}
        menuFixed={fromTop === 100}
        menuHeight={menu && menu.current ? menu.current.offsetHeight : 0}
      />
      <Info ref={info} />
      <Contact ref={contact} />
    </ThemeProvider>
  )
}

export default App
