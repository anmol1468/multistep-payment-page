import { createSlice } from '@reduxjs/toolkit';
import Addionals from '../additional/Addionals';
import Confirmation from '../confimation/Confirmation';
import Info from '../info/Info';
import Plan from '../plans/Plan';
import Summary from '../summary/Summary';


export const currentDisplaySlice = createSlice({
  name: 'currentDisplay',
  initialState: {
    options: [<Info /> , <Plan />, <Addionals />, <Summary />, <Confirmation />],
    currentNum: 0
  },
  reducers: {
    nextStep : (state, action) => {
      if (state.currentNum<4) state.currentNum++
    },
    previousStep : (state, action) => {
      if (state.currentNum>0) state.currentNum--
    },
    selectStep: (state, action) => {
      state.currentNum = action.payload
    }
  }
})

export const { nextStep, previousStep, selectStep } = currentDisplaySlice.actions;


export default currentDisplaySlice.reducer;