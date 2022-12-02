import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

//id, title, image etc are props which are used for giving different unique values for each product so that we won't need to change everything in all pages eg. in product and home

//Array(rating) line is used here to map number of stars with rating given (&#11088 is code for star)

function Product({id, title, image, price, rating}) {
  
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  
  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
               <small>$ </small>{price}
            </p>
               <div className="product_rating">
                  {Array(rating).fill().map((_,i)=>(<p>&#11088;</p>))}
              </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product