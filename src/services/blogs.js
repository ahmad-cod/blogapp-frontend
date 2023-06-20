import axios from 'axios'
const baseUrl = '/api/blogs'

let token

const setToken = newToken => {
  token = `Bearer ${newToken}`
}
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newBlog => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const update = async (id, updatedBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedBlog)
  return response.data
}

const remove = async id => {
  const config = {
    headers: { Authorization: token }
  }
  const blog = await axios.delete(`${baseUrl}/${id}`, config)
  console.log(blog)
}

export default { getAll, setToken, create, update, remove }