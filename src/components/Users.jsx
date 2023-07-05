import { useSelector } from "react-redux"

const User = ({ user }) => {
  return (
    <div>{user.name}</div>
  )
}

const Users = () => {
  const users = useSelector(state => state.users)

  return (
    <div>
      {users && users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Users
