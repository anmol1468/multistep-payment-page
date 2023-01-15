import { createSlice } from '@reduxjs/toolkit';


const planSlice = createSlice({
  name: 'plan',
  initialState: {
    type: {
      name: '',
      rate: undefined
    },
    frequency: 'monthly'
  },
  reducers: {
    changeFrequency: (state, action) => {
    state.frequency==='monthly' ? state.frequency = 'yearly': state.frequency = 'monthly'
    },

    changeType: (state, action) => {
      state.type.name = action.payload.name;
      state.type.rate = action.payload.rate;
    }
  }
})

export const { changeFrequency, changeType } = planSlice.actions;


export default planSlice.reducer;