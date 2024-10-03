import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetAll from './pages/GetAll'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<GetAll/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
    </div>
  )
}

export default App