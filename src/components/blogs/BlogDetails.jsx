import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import blogService from "../../services/blogs"
import { removeBlog, setBlogs } from "../../reducers/blogReducer"
import { Link, useNavigate } from 'react-router-dom'
import { setNotification } from '../../reducers/notificationReducer'

const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if(!blog) return null
  const { title, author, url, likes, id, user } = blog
  console.log('BlogDetails', blog)


  const handleLike = async () => {
    const blogToUpdate = { ...blog, likes: likes + 1 }

    try {
      const updatedBlog = await blogService.update(id, blogToUpdate)

      dispatch(
        setBlogs((prev) =>
          prev.map((prev) => (prev.id === id ? updatedBlog : prev))
        )
      )
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async () => {
    if (window.confirm(`Remove blog ${title} by ${author}?`)) {
      console.log("delete", id)

      try {
        await blogService.remove(id)
        dispatch(removeBlog(id))
        dispatch(setNotification({ type: 'success', message: `You deleted "${title}"`}))
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
  const blogStyle = {
    paddingTop: 10,
  }

  return (
    <div style={blogStyle} className=''>
      <h2 className='font-semibold text-2xl'>{title} {author}</h2>
        <p>
          <Link to={url}>
            {url}
          </Link>
        </p>
        <p>
          Likes {likes}
          <button onClick={handleLike}>like</button>
        </p>
        <p>{user.name}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

BlogDetails.propTypes = {
  blog: PropTypes.object,
}
export default BlogDetails