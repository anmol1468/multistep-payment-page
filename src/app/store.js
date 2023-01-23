import { configureStore } from '@reduxjs/toolkit';
import currentDisplaySlice from '../features/components/currentDisplay/currentDisplaySlice';
import infoSlice from '../features/components/info/infoSlice';
import planSlice from '../features/components/plans/planSlice';
import selectedAddOnsSlice from '../features/components/additional/addionalSlice'

const store = configureStore({
  reducer: {
    info: infoSlice,
    currentDisplay: currentDisplaySlice,
    plan: planSlice,
    addOns : selectedAddOnsSlice
  }
})

export default store