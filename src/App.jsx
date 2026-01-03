import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nav from './components/Nav'


const App =() => {


  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/projects' element= {<Projects/>}/>
        <Route path='/contact' element= {<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
