import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
