import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../reducers/userReducer"


const LoggedInUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.name)

  const handleLogout = () => {
    window.localStorage.removeItem("user")
    dispatch(setUser(null))
  }

  return (
    <div>
      <span className="nav-link">{user} logged in</span>
      <button onClick={handleLogout} className="nav-link rounded-md bg-gray-900 text-gray-200">Logout</button>
    </div>
  )
}

export default LoggedInUser
