import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Components/Footer/Footer';
import Product from './Customer/Components/Product/Product';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails';
import Cart from './Customer/Components/Cart/Cart';
import Checkout from './Customer/Components/Checkout/Checkout';
import Order from './Customer/Components/Order/Order';
import OrderDetails from './Customer/Components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div>
      {/* All paths which hits / will go to CustomerRouters */}
      {/* Later to implement admin route */}
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>

    </div>
  );
}

export default App;
