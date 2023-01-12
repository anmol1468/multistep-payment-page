import Payment from '../features/pages/paymentPage/Payment';
import './App.css';
import store from './store';

function App() {

  console.log(store.getState())

  return (
    <div className="App" store= {store}>
      <Payment></Payment>
    </div>
  );
}

export default App;
