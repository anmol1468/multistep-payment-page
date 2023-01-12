import { configureStore } from '@reduxjs/toolkit';
import infoSlice from '../features/components/info/infoSlice';

const store = configureStore({
  reducer: {
    info: infoSlice
  }
})

export default store