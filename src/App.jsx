import { useState, useEffect } from 'react'
import blogService from './services/blogs'
import LoginForm from './components/auth/LoginForm'
import Blogs from './components/Blogs'
import Header from './components/Header'
import LoggedInUser from './components/LoggedInUser'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('user')

    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser)
        if (user.token) {
          setUser(user)
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
      blogService.getAll().then(blogs => setBlogs(blogs))
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div>
      { user ?
        <div>
          <Header text='Blogs' />
          <Notification />
          <LoggedInUser user={user.name} setUser={setUser} />
          <Togglable buttonLabel='Add new Blog'>
            <BlogForm setBlogs={setBlogs} />
          </Togglable>
          <Blogs blogs={blogs} setBlogs={setBlogs} />
        </div>
        : <LoginForm setUser={setUser} />}
    </div>
  )
}

export default App