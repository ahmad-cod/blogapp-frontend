import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const User = ({ user }) => {
  return (
    <div>{user.name} {user.blogs.length}</div>
  )
}

const Users = () => {
  const users = useSelector(state => state.users)

  return (
    <div>
      {users && users.map(user => 
      <Link to={`/users/${user.id}`}><User key={user.id} user={user} /></Link>)
      }
    </div>
  )
}

export default Users
