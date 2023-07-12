import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='sm:flex items-center justify-between'>
      <Link 
        to='/login'
      >
        <li
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
            Login
        </li>
      </Link>
      <Link 
        to='/signup'
      >
        <li
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
            Signup
        </li>
      </Link>
    </ul>
  )
}

export default SignedOutLinks
