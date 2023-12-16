import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Components/Footer/Footer';
import Product from './Customer/Components/Product/Product';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails';
import Cart from './Customer/Components/Cart/Cart';
import Checkout from './Customer/Components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
