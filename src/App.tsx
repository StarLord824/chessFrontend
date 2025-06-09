import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import LandingPage from './components/LandingPage'
import GameArena from './components/GameArena'
import LoginPage from './components/LoginPage'
import SigninPage from './components/SigninPage'
// import HeaderBar from './components/HeaderBar'

function App() {

  return (
    <>
      <Router>
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