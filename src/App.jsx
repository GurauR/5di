import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AddInterrogazione from './pages/AddInterrogazione'
import Calendario from './pages/Calendario'
import HomePage from './pages/HomePage'
import Materia from './pages/Materia'



export default function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/5di/' element={<Navigate to='home'/>}/>
      <Route path='/5di/home' element={<HomePage/>}/>
      <Route path='/5di/calendario' element={<Calendario />} />
      <Route path='/5di/materia' element={<Materia />} />
      <Route path='/5di/add' element={<AddInterrogazione />} />
      <Route path='*' element={<h1>Qualcosa non va!</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}
