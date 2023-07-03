import React, { useState } from "react"
import AppleProducts from "./AppleProducts"

const Apple = ({ addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const { shopItems } = AppleProducts
  return (
    <>
    <div className='product-content grid1'>
      {shopItems.map((shopItems, index) => {
        return (
            
              <div className='box'>
                <div className='product mtop'>
                  <div className='img'>
                    <span className='discount'>{shopItems.discount}% Off</span>
                    <img src={shopItems.cover} width='400px' alt="" />
                    <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>
                  </div>
                  <div className='product-details'>
                    <h3>{shopItems.name}</h3>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                      <h4>${shopItems.price}.00 </h4>
                      <button onClick={() => addToCart(shopItems)}>
                        <i className='fa fa-plus'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
           
        )
      })}
       </div>
    </>
  )
}
export default Apple