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
    removeBlog(state, action) {
      return state.filter(blog => blog.id !== action.payload)
    }
  }
})

export const { setBlogs, appendBlog, removeBlog } = blogSlice.actions
export default blogSlice.reducer