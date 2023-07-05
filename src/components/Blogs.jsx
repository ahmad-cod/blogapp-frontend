import { useSelector } from "react-redux"
import Blog from "./Blog"

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)
  if (blogs.length === 0) return <p>No blog is added yet.</p>
  else
    return sortedBlogs.map((blog) => (
      <Blog key={blog.id} blog={blog} />
    ))
}

export default Blogs
