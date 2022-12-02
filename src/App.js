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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51MAepASHwHsw4yZ0Aq2ZmyMfBvSiBnxejLHGBbcV8tMkquUNtzk7VQyQG2RJ2DIINC8bxNl2gjL1ZSiqMvwp19gz00uk9x94fY");

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
              <Route path="/payment" element={<><Header />
                                                <Elements stripe={promise}>
                                                  <Payment />
                                                </Elements></>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
