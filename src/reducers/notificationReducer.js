import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    type: '',
    message: ''
  },
  reducers: {
    createNotification(state, action) {
      console.log(action.payload)
      return action.payload
    },
    clearNotification() {
      return { type: '', message: '' }
    }
  }
})

export const { createNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotification = ({ type, message }) => {
  return dispatch => {
    dispatch(createNotification({ type, message }))

    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }
}