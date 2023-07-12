import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
  name: 'blog',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload
    },
    appendBlog(state, action) {
      state.push(action.payload)
    },
    updateBlog(state, action) {
      const updatedBlog = action.payload
      console.log(updatedBlog)
      return state.map(blog => blog.id !== updatedBlog.id ? blog : updatedBlog)
    },
    removeBlog(state, action) {
      return state.filter(blog => blog.id !== action.payload)
    },
    addComment(state, action) {
      const updatedBlog = action.payload
      console.log(updatedBlog)
      return state.map(blog => blog.id !== updatedBlog.id ? blog : updatedBlog)
    }
  }
})

export const { setBlogs, appendBlog, removeBlog, updateBlog, addComment } = blogSlice.actions
export default blogSlice.reducer