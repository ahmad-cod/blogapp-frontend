import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import blogService from "../../services/blogs"
import { addComment, removeBlog, setBlogs, updateBlog } from "../../reducers/blogReducer"
import { Link, useNavigate } from 'react-router-dom'
import { setNotification } from '../../reducers/notificationReducer'

const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if(!blog) return null
  const { title, author, url, likes, id, user } = blog

  const handleLike = async () => {
    const blogToUpdate = { ...blog, likes: likes + 1 }

    try {
      const updatedBlog = await blogService.update(id, blogToUpdate)

      dispatch(updateBlog(updatedBlog))
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

  const handleComment = async (e) => {
    e.preventDefault()
    const comment = e.target.comment.value

    const blogToUpdate = {
      ...blog,
      comments: [...blog.comments, comment]
    }
    console.log(comment)
    
    try {
      const updatedBlog = await blogService.update(id, blogToUpdate)
      dispatch(updateBlog(updatedBlog))
    } catch (error) {
      console.log(error)
    }
    e.target.comment.value = ''
  }
  const blogStyle = {
    paddingTop: 10,
  }

  return (
    <section style={blogStyle} className=''>
      <h2 className='font-semibold text-2xl'>{title} by {author}</h2>
        <p>
          <Link to={url}>
            {url}
          </Link>
        </p>
        <p>
          Likes {likes}
          <button 
            onClick={handleLike}
            className='btn-gradient group group-hover:from-gray-800-300 group-hover:to-lime-300 px-5 py-1 ml-4'
          >
            like
          </button>
          {/* <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
  </svg>
  <span class="sr-only">Like</span>
</button> */}
        </p>
        <p>{user.name}</p>
        <button onClick={handleDelete}>Delete</button>
        <div className="">
          <h4>
            Comments {blog.comments.length ? `${blog.comments.length}` : ''}
          </h4>
          <form onSubmit={handleComment}>            
            <textarea 
              id="comment" 
              name='comment'
              rows="2" 
              class="block max-w-xl p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

            <button type='submit' className='bg-gray-600 px-6 py-2 mt-2 rounded-md hover:bg-gray-700'>Comment</button>
          </form>
          <ul className='mt-4'>
            {
              blog.comments ?
                blog.comments.map((comment, i) => <li key={i}>
                  {i + 1}. {comment}</li>) : null
            }
          </ul>
        </div>
    </section>
  )
}

BlogDetails.propTypes = {
  blog: PropTypes.object,
}
export default BlogDetails