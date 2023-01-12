import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    name: '',
    email: '',
    phoneNum: ''
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeNum: (state, action) => {
      state.phoneNum = action.payload
    }
  }

})

export const { changeName, changeEmail, changeNum } = infoSlice.actions;

export default infoSlice.reducer;