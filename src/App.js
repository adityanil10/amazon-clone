import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

// Router and Routes specify component to be used in a certain url

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
      <div className="app">
        <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<><Header /><Home /></>} />
              <Route path="/checkout" element={<><Header /><Checkout /></>} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
