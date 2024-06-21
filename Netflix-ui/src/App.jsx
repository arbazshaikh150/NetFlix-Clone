import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Netflix from './Pages/NetFlix.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/' element={<Netflix />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
