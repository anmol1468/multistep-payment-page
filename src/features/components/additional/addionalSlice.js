import { createSlice } from '@reduxjs/toolkit';

const selectedAddOnsSlice = createSlice({
  name: 'addOns',
  initialState: {
    selectedAddOns: []
  },
  reducers: {
    addAddOn : (state, action) => {
      state.selectedAddOns.push(action.payload)
    },

    removeAddOn : (state, action) => {
      console.log(state.selectedAddOns)
      state.selectedAddOns = state.selectedAddOns.filter((addOn) => {
        
        return addOn.name.toLowerCase()!==action.payload.name.toLowerCase()
      
      })
    }
  }

})

export const { addAddOn, removeAddOn } = selectedAddOnsSlice.actions;

export default selectedAddOnsSlice.reducer;