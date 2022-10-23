import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";


/* Features of react-currency-format :
    Features
    1. Prefix, suffix and thousand separator.
    2. Custom format pattern.
    3. Masking.
    4. Custom formatting handler.
    5. Formatting a input or a simple text. */

// CurrencyFormat helps in easier control and design of field

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket?.length} items):
                        <small> $ </small>
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button > Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal