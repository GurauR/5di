import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AddInterrogazione from './pages/AddInterrogazione'
import Calendario from './pages/Calendario'
import HomePage from './pages/HomePage'
import Materia from './pages/Materia'
import AddUser from './pages/AddUser'
import UsersList from './pages/UsersList'
import User from './pages/User'
import UpdateUser from './pages/UpdateUser'

export default function App() { 
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to='5di'/>}/>
      <Route path='/5di/' element={<Navigate to='home'/>}/>
      <Route path='/5di/home' element={<HomePage/>}/>
      <Route path='/5di/calendario' element={<Calendario />} />
      <Route path='/5di/materia' element={<Materia />} />
      <Route path='/5di/addInterrogazione' element={<AddInterrogazione />} />
      <Route path='/5di/addUser' element={<AddUser />} />
      <Route path='/5di/usersList' element={<UsersList />} />
      <Route path='/5di/user' element={<User />} />
      <Route path='/5di/updateUser' element={<UpdateUser />} />
      <Route path='*' element={<h1>Qualcosa non va!</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}
