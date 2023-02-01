import Payment from '../features/pages/paymentPage/Payment';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Payment></Payment>
    </div>
    </Provider>
  );
}

export default App;
