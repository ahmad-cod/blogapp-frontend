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

      console.log(user.token)
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
    <form onSubmit={addNewUser} className="mt-6 px-4 max-w-[540px]">
      <Header text="Sign up" />
      <div className="relative w-full z-0 mb-6 group">
        <input
          type="text"
          value={name}
          id="name"
          onChange={({ target }) => setName(target.value)}
          className="signup-input peer"
          required
        />
        <label 
          htmlFor="name"
          className="label"
        >Name</label>
      </div>
      <div className="relative w-full z-0 mb-6 group">
        <input
          type="text"
          value={username}
          id="username"
          onChange={({ target }) => setUsername(target.value)}
          className="signup-input peer"
        />
        <label 
          htmlFor="username"
          className="label"
        >Username</label>
      </div>
      <div className="relative w-full z-0 mb-6 group">
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className="signup-input peer"
        />
        <label 
          htmlFor="password"
          className="label"
        >Password</label>
      </div>
      <button 
        type="submit" 
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Submit</button>
    </form>
  )
}

export default SignupForm
