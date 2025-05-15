import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to HopeConnect</h1>
      <Link to="/login" className="text-blue-600 underline mt-4 inline-block">
        Go to Login
      </Link>
    </div>
  )
}