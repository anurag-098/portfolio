import React from 'react';
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skill from './components/skills/Skill'
import Project from './components/projects/Project';
function App() {

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />

        </>
    )
}

export default App