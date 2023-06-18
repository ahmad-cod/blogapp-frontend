import { useState, useEffect } from 'react'
import blogService from './services/blogs'
import LoginForm from './components/auth/LoginForm'
import Blogs from './components/Blogs'
import Header from './components/Header'
import LoggedInUser from './components/LoggedInUser'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [ user, setUser ] = useState(null)
  const [notification, setNotification] = useState({
    type: '',
    message: ''
  })


  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('user')
  
    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser)
        if (user.token) {
          setUser(user)
          blogService.setToken(user.token)
          console.log(user)
        } else {
          console.log('User object does not have a token property')
        }
      } catch (error) {
        console.log('Invalid JSON string for user:', loggedInUser)
      }
    }
  
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])

  return (
    <div>
      { user ? 
      <div>
        <Header text='Blogs' />
        <Notification notification={notification} />
        <LoggedInUser user={user.name} setUser={setUser} />
        <BlogForm setBlogs={setBlogs} setNotification={setNotification} />
        <Blogs blogs={blogs} /> 
      </div>
      : <LoginForm setUser={setUser} notification={notification} setNotification={setNotification} />}
    </div>
  )
}

export default App