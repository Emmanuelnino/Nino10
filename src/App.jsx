import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/home' Component={Home}/>
        <Route path='/services' Component={Services}/>
      </Routes>
    </>
  )
}

export default App
