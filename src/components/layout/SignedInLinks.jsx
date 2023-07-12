import { Link } from 'react-router-dom'
import LoggedInUser from '../LoggedInUser'

const SignedInLinks = () => {
  return (
    <ul className='flex flex-col sm:flex-row items-center justify-center sm:justify-between'>
      <li className='px-2'>
        <Link 
          to='/create'
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Create Post
        </Link>
      </li>
      <li>
        <Link 
          to='/users'
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Users
        </Link>
      </li>
      <LoggedInUser />
    </ul>
  )
}

export default SignedInLinks
