
const UserDetails = ({ user }) => {
  if(!user) return null
  const { name, blogs } = user
  console.log(blogs)

  return (
    <div>
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>added blogs</p>
      <ul>
        {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
      </ul>
    </div>
  )
}

export default UserDetails
