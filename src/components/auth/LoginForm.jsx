import { useState } from "react"
import authService from "../../services/auth"
import blogService from "../../services/blogs"
import Header from "../Header"
import SignupForm from "./SignupForm"
import Notification from "../Notification"
import { useDispatch } from "react-redux"
import { setNotification } from "../../reducers/notificationReducer"
import { setUser } from "../../reducers/userReducer"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await authService.login({ username, password })
      console.log(user)
      if (!user) {
        dispatch(setNotification({
          type: "error",
          message: "Wrong username or password",
        })
        )
      } else {
        dispatch(setUser(user))
        blogService.setToken(user.token)
        window.localStorage.setItem("user", JSON.stringify(user))
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Notification />
      <form onSubmit={handleLogin}>
        <Header text="Login" />
        <div className="">
          Username
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            required
          />
        </div>
        <div className="">
          Password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginForm
