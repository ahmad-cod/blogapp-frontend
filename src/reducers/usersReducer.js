import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUsers(state, action) {
      return action.payload
    }
  }
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer