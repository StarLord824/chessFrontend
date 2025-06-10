import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import LandingPage from './components/Landing/LandingPage'
import GameArena from './components/Match/GameArena'
import LoginPage from './components/Login/LoginPage'
import SigninPage from './components/Login/SigninPage'

function App() {

  return (
    <>
      <Router>
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
          <Route path="match" element={<GameArena/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="signin" element={<SigninPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

{/* <HeaderBar whitePlayer="Abhinav" blackPlayer="Aditya" time="00:00" /> */}