// import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import blogService from "../services/blogs"
import Header from "./Header"
import { setNotification } from "../reducers/notificationReducer"
import { appendBlog } from "../reducers/blogReducer"
import { useNavigate } from "react-router-dom"

const BlogForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newBlog = { title, author, url }

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
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="md:pl-11">
      <Header text="Create new blog" />
      <div className="mt-1">
        Title
        <input 
          type="text" 
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          class="max-w-2xl py-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Blog title" required />
      
      </div>
      <div className="mt-3">
        Author
        <input 
          type="text" 
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
          class="max-w-2xl py-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="John Doe" required />
      </div>
      <div className="mt-3">
        Url
        <input 
          type="text" 
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          class="max-w-2xl py-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="https://google.com" required />
      
      </div>
      <button 
        type="submit"
        className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add Blog
      </button>

    </form>
  )
}

// BlogForm.propTypes = {
//   setBlogs: PropTypes.func.isRequired,
//   setNotification: PropTypes.func.isRequired,
// }

export default BlogForm