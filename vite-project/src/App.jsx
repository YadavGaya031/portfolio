import React from 'react'
import Home from './pages/Home'
import Buttons from './components/Buttons'
import  SkillsPage  from './pages/SkillsPage'
import  Work  from './pages/Work'
import Table from './pages/Table'
import MouseFollower from './components/MouseFollower'
import About from './pages/About'

const App = () => {
  return (
    <>
      <MouseFollower/>
      <Home />
      <Buttons/>
      <SkillsPage/>
      <Work/>
      <Table/>
      <About />
    </>
  )
}

export default App
