import { Link } from 'react-router-dom'
import LoggedInUser from '../LoggedInUser'

const SignedInLinks = () => {
  return (
    <ul className='flex items-center justify-between'>
      <li className='px-2'>
        <Link to='/create'>Create Post</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <LoggedInUser />
    </ul>
  )
}

export default SignedInLinks
