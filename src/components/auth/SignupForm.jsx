import { useState } from "react"
import Header from "../Header"
import authService from "../../services/auth"
import blogService from "../../services/blogs"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../reducers/userReducer"

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const addNewUser = async (event) => {
    event.preventDefault()

    const newUser = {
      name,
      username,
      password,
    }
    console.log(newUser)
    try {
      const user = await authService.signup(newUser)
      console.log(user)
      dispatch(setUser(user))

      blogService.setToken(user.token)
      window.localStorage.setItem("user", JSON.stringify(user))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
    setName("")
    setUsername("")
    setPassword("")
  }

  return (
    <form onSubmit={addNewUser}>
      <Header text="Sign up" />
      <div className="">
        Name:
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div className="">
        Username:
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="">
        Password:
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  )
}

export default SignupForm
