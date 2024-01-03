import {useState,useEffect} from 'react';
import { formatPrice } from '../utils/helpers';
import shopping_cart from "../assets/shopping_cart.png"

export default function Cart() {
        const [carts, setCarts] = useState([]);
      

        useEffect(() => {
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
            setCarts(existingCartItems);
          }, []);
        
  return (
    <div className="cart-modal invisible transition" id='cart'>
      <h5 className='cart-modal-title font-semibold text-xl text-center'>Recenlty Added Products</h5>
      {
        (carts?.length > 0) ? (
          <div className='cart-modal-list grid'>
            {
              carts.map(cart => {
                return (
                  <div className='cart-modal-item grid align-center font-manrope py-2' key = {cart.id}>
                    <div className='cart-modal-item-img'>
                      <img src = {cart?.thumbnail} alt = "" className='img-cover' />
                    </div>
                    <div className='cart-modal-item-title fs-13 font-manrope text-capitalize'>{cart?.title}</div>
                    <div className='cart-modal-item-price text-orange fs-14 fw-6'>
                      {formatPrice( cart?.discountedPrice)}
                    </div>
                  </div>
                )
              })
            }
<div className='capitalize view-cart-btn bg-orange-500 text-md  text-center'>view my shopping cart</div>
          </div>) : (
          <div className = "flex flex-column align-center justify-center cart-modal-empty">
            <img src = {shopping_cart} alt = "" className='' />
            <h6 className='text-dark fw-4'>No products yet</h6>
          </div>
        )
      }
    </div>
  )
}
