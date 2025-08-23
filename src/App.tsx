import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import LandingPage from './components/Landing/LandingPage'
import { HeroSection } from './components/Landing/HeroSection'
import GameArena from './components/Match/GameArena'
import LoginPage from './components/Login/LoginPage'
import SigninPage from './components/Login/SigninPage'
import { Arena } from './components/Match/Arena'
import { About } from './components/Landing/About'

function App() {

  return (
    <>
      <Router>
        {/* <div className='absolute h-screen w-screen bg-yellow-50'>
          hi
        </div> */}
        <div className="absolute area h-screen w-screen">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HeroSection sidebarOpen={false}/>}/>
          <Route path="/match" element={<GameArena/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signin" element={<SigninPage/>}/>
          <Route path="/arena" element={<Arena/>}/>
          {/* <Route path="/settings" element={<Settings/>}/> */}
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

{/* <HeaderBar whitePlayer="Abhinav" blackPlayer="Aditya" time="00:00" /> */}