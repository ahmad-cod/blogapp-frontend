// import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import blogService from "../services/blogs"
import Header from "./Header"
import { setNotification } from "../reducers/notificationReducer"
import { appendBlog } from "../reducers/blogReducer"

const BlogForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newBlog = { title, author, url }
    console.log(newBlog)

    try {
      const blog = await blogService.create(newBlog)

      console.log(blog)
      dispatch(appendBlog(blog))
      dispatch(setNotification({
        type: "success",
        message: `A new blog ${newBlog.title} by ${newBlog.author} added`,
      })
      )
      setTitle("")
      setAuthor("")
      setUrl("")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Header text="Create new blog" />
      <div className="">
        Title
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
        />
      </div>
      <div className="">
        Author
        <input
          type="text"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
          required
        />
      </div>
      <div className="">
        Url
        <input
          type="text"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          required
        />
      </div>
      <button type="submit">Add Blog</button>
    </form>
  )
}

// BlogForm.propTypes = {
//   setBlogs: PropTypes.func.isRequired,
//   setNotification: PropTypes.func.isRequired,
// }

export default BlogForm
