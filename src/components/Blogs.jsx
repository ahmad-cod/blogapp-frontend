import Blog from "./Blog"

const Blogs = ({ blogs, setBlogs }) => {
    if (blogs.length === 0) return <p>No blog is added yet.</p>
    
    else return blogs.map(blog => <Blog key={blog.id} blog={blog} setBlogs={setBlogs} />)
}

export default Blogs