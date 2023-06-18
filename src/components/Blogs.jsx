import Blog from "./Blog"

const Blogs = ({ blogs }) => (blogs.length && blogs.map(blog => <Blog key={blog.id} blog={blog} />))

export default Blogs