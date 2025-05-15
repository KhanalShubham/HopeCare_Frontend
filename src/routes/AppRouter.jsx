import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}