import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Components/Footer/Footer';
import Product from './Customer/Components/Product/Product';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
