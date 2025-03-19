import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Views/Home"
import Hello from './Views/Hello'
import Number from './Views/Number'
import Color from './Views/Color'
function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:word' element={<Hello />} />
        <Route path='/number/:num' element={<Number />} />
        <Route path='/color/:word/:coll/:col' element={<Color />} />
      </Routes>
    </>
  )
}

export default App