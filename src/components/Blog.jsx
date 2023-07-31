import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Mo from '../assets/images/mo.jpeg'
import shortly from '../assets/images/shortly.png.jpg'
import quit from '../assets/images/quitting-the-wrong.jpg'
const imgArray = [Mo, shortly, quit]

const Blog = ({ blog }) => {
  const randomImg = imgArray[Math.floor(Math.random() * imgArray.length)]
  return (
    <div className="max-w-sm border dark:border-gray-700 rounded-lg">
      <div className="">
        <img className='rounded-lg' src={randomImg} alt="" />
      </div>
      <div className='mt-4 px-4'>
      <Link to={`/blogs/${blog.id}`}>
        <h4 className='text-2xl'>{blog.title}</h4>
        🔥 
        {blog.author}
      </Link>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}
export default Blog