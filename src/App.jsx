import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Error, Home, Profile, Register} from './pages'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<Error />} />
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
