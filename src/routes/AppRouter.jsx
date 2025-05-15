import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Homepage from '../Pages/Homepage'
import SignUp from '../pages/SignUp'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup'element={<SignUp/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}