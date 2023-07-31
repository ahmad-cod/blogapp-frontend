import { useEffect } from 'react'
import blogService from './services/blogs'
import userService from './services/users'
import LoginForm from './components/auth/LoginForm'
import Blogs from './components/BlogsList'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { setBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import { setUsers } from './reducers/usersReducer'
import Users from './components/Users'
import Navbar from './components/layout/Navbar'
import { Routes, Route, useMatch } from 'react-router-dom'
import SignupForm from './components/auth/SignupForm'
import BlogDetails from './components/blogs/BlogDetails'
import UserDetails from './components/users/UserDetails'
import Footer from './components/Footer'

const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const users = useSelector(state => state.users)
  const blogMatch = useMatch('/blogs/:id')
  const userMatch = useMatch('/users/:id')
  // const user = useSelector(state => state.user)
  // const [blogs, setBlogs] = useState([])
  // const [ user, setUser ] = useState(null)

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('user')

    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser)
        if (user.token) {
          dispatch(setUser(user))
          blogService.setToken(user.token)
          // console.log(user)
        } else {
          console.log('User object does not have a token property')
        }
      } catch (error) {
        console.log('Invalid JSON string for user:', loggedInUser)
      }
    }

    try {
      blogService.getAll().then(blogs => dispatch(setBlogs(blogs)))
      userService.getAll().then(users => dispatch(setUsers(users)))
    } catch (error) {
      console.error(error)
    }
  }, [dispatch])

  const blog = blogMatch ? blogs.find(blog => blog.id === blogMatch.params.id) : null
  const user = userMatch ? users.find(user => user.id === userMatch.params.id) : null

  return (
    <main className='lg:max-w-[1400px] sm:px-6 lg:px-8 dark:bg-gray-800 min-h-screen'>
      <div>
        <Navbar />
        <Notification />
        <Routes>
          <Route path='/blogs/:id' element={<BlogDetails blog={blog} />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/users/:id' element={<UserDetails user={user} />} />
          <Route path='/users' element={<Users />} />
          <Route path='/create' element={<BlogForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route exact path='/' element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </main>
  )
}

export default App