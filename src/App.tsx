// App.tsx
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import LandingPage from './components/Landing/LandingPage'
import GameArena from './components/Match/GameArena'
import { Arena } from './components/Match/Arena'
import { About } from './components/Landing/About'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import Layout from './components/Layout/Layout'
import Home from './components/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Auth routes without sidebar */}
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
          {/* Routes with sidebar layout */}
          <Route path="/*" element={<Layout />}>
            <Route index element={<LandingPage/>}/>
            <Route path="dashboard" element={<Home/>}/>
            <Route path="match" element={<GameArena/>}/>
            <Route path="arena" element={<Arena/>}/>
            <Route path="about" element={<About/>}/>
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App