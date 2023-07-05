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
      {user} logged in
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LoggedInUser
