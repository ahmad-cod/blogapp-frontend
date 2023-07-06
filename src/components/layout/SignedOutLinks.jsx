import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className='flex items-center justify-between'>
      <li className='mr-3'>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
  )
}

export default SignedOutLinks
