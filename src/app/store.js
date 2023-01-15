import { configureStore } from '@reduxjs/toolkit';
import currentDisplaySlice from '../features/components/currentDisplay/currentDisplaySlice';
import infoSlice from '../features/components/info/infoSlice';
import planSlice from '../features/components/plans/planSlice';

const store = configureStore({
  reducer: {
    info: infoSlice,
    currentDisplay: currentDisplaySlice,
    plan: planSlice
  }
})

export default store