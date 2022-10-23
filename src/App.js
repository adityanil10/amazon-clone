import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

// Router and Routes specify component to be used in a certain url

function App() {
  return (
      <div className="app">
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
