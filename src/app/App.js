import Payment from '../features/pages/paymentPage/Payment';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

function App() {

  // useEffect(() => {
    
  //   setInterval(() => {
      console.log(store.getState())
  //   }, 5000);
  // },[])

  const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})
  
  return (
    <Provider store={store}>
    <div className="App">
      <Payment></Payment>
    </div>
    </Provider>
  );
}

export default App;
