import { useSelector } from "react-redux"
import Blog from "./Blog"
import { Link } from "react-router-dom"

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)
  if (blogs.length === 0) return <p>No blog is added yet.</p>
  else
    return sortedBlogs.map((blog) => (
      <Link to={`/blogs/${blog.id}`} key={blog.id}>
        <Blog blog={blog} />
      </Link>
    ))
}

export default Blogs
