import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Error from './pages/Error' 
import Esg from './pages/Esg'
import Fee from './pages/Fee'
import Managers from './pages/Managers'
import Manager from './pages/Manager'
import Performance from './pages/Performance'
import TermsAndConditions from './pages/Terms-and-Conditions'
// import components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <Router className='router'>
      <Navbar />
      <Hero />
      <Sidebar />
      
      <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/esg' element={<Esg/>}></Route>
       <Route path='/fee' element={<Fee/>}></Route>
       <Route path='/managers' element={<Managers/>}></Route>
       <Route path='/manager/:id' element={<Manager/>}></Route>
       <Route path='/performance' element={<Performance/>}></Route>
       <Route path='/terms' element={<TermsAndConditions/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
