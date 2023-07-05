import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import blogService from "../services/blogs"
import Togglable from "./Togglable"
import { removeBlog, setBlogs } from "../reducers/blogReducer"

const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const handleLike = async () => {
    const blogToUpdate = { ...blog, likes: blog.likes + 1 }

    try {
      const updatedBlog = await blogService.update(blog.id, blogToUpdate)

      dispatch(
        setBlogs((prev) =>
          prev.map((prev) => (prev.id === blog.id ? updatedBlog : prev))
        )
      )
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      console.log("delete", blog.id)

      try {
        await blogService.remove(blog.id)
        dispatch(removeBlog(blog.id))
      } catch (error) {
        console.log(error)
      }
    }
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <Togglable buttonLabel="View">
        <p>{blog.url}</p>
        <p>
          Likes {blog.likes}
          <button onClick={handleLike}>like</button>
        </p>
        <p>{blog.user.name}</p>
        <button onClick={handleDelete}>Delete</button>
      </Togglable>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}
export default Blog