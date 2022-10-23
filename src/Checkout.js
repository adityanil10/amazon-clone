import React from 'react'
import "./Checkout.css"

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" 
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg" 
                 alt="CHECKOUT AD"
            />

            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
        </div>

        <div className="checkout_right">
            <h2> The subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout