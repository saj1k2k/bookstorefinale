import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Error, Home, Profile, Register, SharedLayout} from './pages'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route
            path='/'
            element={
                <SharedLayout />
            }>

            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route path='*' element={<Error />} />
          <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
