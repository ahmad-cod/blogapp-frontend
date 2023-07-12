import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import blogService from "../services/blogs"
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

  return (
    <div className="flex items-center gap-x-6 lg:gap-x-16">
      <div>
        🔥 
        {blog.author}
      </div>
      <div className="">
        {blog.title}
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}
export default Blog