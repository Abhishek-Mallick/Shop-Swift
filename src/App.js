import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
