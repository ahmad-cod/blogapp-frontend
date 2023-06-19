import Blog from "./Blog"

const Blogs = ({ blogs, setBlogs }) => {
    const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)
    if (blogs.length === 0) return <p>No blog is added yet.</p>
    
    else return sortedBlogs.map(blog => <Blog key={blog.id} blog={blog} setBlogs={setBlogs} />)
}

export default Blogs