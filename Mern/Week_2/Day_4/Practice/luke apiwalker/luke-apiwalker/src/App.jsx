import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'

import Search from './components/Search'
import Display from './Views/Display'
import Err from './Views/Err'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Search/>
      <Routes>
        <Route path='/:wantedlist/:id'element={<Display/>} />
        <Route path='*'element={<Err/>} />
      </Routes>
    </>
  )
}

export default App