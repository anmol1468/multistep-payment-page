import { createSlice } from '@reduxjs/toolkit';
import Addionals from '../additional/Addionals';
import Info from '../info/Info';
import Plan from '../plans/Plan';
import Summary from '../summary/Summary';


export const currentDisplaySlice = createSlice({
  name: 'currentDisplay',
  initialState: {
    options: [<Info /> , <Plan />, <Addionals />, <Summary />],
    currentNum: 0
  },
  reducers: {
    nextStep : (state, action) => {
      if (state.currentNum<3) state.currentNum++
    },
    previousStep : (state, action) => {
      if (state.currentNum>0) state.currentNum--
    }
  }
})

export const { nextStep, previousStep } = currentDisplaySlice.actions;


export default currentDisplaySlice.reducer;