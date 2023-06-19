import blogService from "../services/blogs"
import Togglable from "./Togglable"

const Blog = ({ blog, setBlogs }) => {
  const handleLike = async () => {
    const blogToUpdate = {...blog, likes: blog.likes + 1}

    try {
      const updatedBlog = await blogService.update(blog.id, blogToUpdate)

      setBlogs(prev => prev.map(prev => prev.id === blog.id ? updatedBlog : prev))
    } catch (error) {
      console.log(error)
    }
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  
  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <Togglable buttonLabel='View'>
        <p>{blog.url}</p>
        <p>
          Likes {blog.likes}
          <button onClick={handleLike}>like</button>
        </p>
        <p>{blog.user.name}</p>
      </Togglable>
    </div>  
  )}
  
  export default Blog