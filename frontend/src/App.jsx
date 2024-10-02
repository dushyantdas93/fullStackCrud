import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Create from './pages/Create.jsx'
// import axios from "axios"
import Update from './pages/Update.jsx'

const App = () => {
 


  

  return (
    <Router>
<Routes>
  <Route path='/' element={<Home  />} />
  <Route path='/create' element={<Create   />} />
  <Route path='/update/:id' element={<Update   />} />
  
</Routes>
    </Router>
  )
}

export default App