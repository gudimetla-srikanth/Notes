import React from 'react'
import Notes from './components/notes/Notes'
import NavBar from './components/nav/NavBar'
import Note from './components/note/Note'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { useSelector, useDispatch } from 'react-redux'
export default function App() {
  const state = useSelector(state => state)
  return (
    <div className="app">
      <BrowserRouter>
        {!state ? <Routes>
          <Route path="/" element={<Login />} />
        </Routes> : <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Note />} />
            <Route path='/notes' element={<Notes />} />
          </Route>
        </Routes>}
      </BrowserRouter>
    </div>
  )
}

