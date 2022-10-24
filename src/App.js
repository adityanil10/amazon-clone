import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

// Router and Routes specify component to be used in a certain url

function App() {
  return (
      <div className="app">
        <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<><Header /><Home /></>} />
              <Route path="/checkout" element={<><Header /><Checkout /></>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
