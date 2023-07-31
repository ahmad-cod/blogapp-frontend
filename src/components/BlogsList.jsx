import { useSelector } from "react-redux"
import Blog from "./Blog"

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)
  if (blogs.length === 0) return <p>No blog is added yet.</p>
  else
    return (
      <section className="md:pl-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4 mb-8 pb-8 ">
        {sortedBlogs.map((blog) => (
          <Blog blog={blog} key={blog.id} />
      ))
      }
    </section>
    )
}

export default Blogs
