import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeAllCart, removeFromCart } from '../../redux/cartSlice';
import Button from '../counter/buttons';
import Counter from '../counter/counter';

const Cart = () => {
  const cartList = useSelector(state => state.cartList.cartList);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);



  const calcTotal = () => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.counterBuy * item.price;
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calcTotal();
  }, [cartList])


  const increamentCounter = (p) => {
    dispatch(addToCart(p));
    // calcTotal();
  }

  const decreamentCounter = (p) => {
    dispatch(removeFromCart(p));
    // calcTotal();
  }

  const removeAll = (p) => {
    dispatch(removeAllCart(p));
    // calcTotal();
  }



  return (
    !totalPrice ?
      <div className="goToProducts text-center" >
        <div className="w-25 m-auto">
          <img className="w-100" src="./../assets.cart.png" alt="" />
        </div>
        <h2 className="mb-4 text-white">Your cart is empty!</h2>
        <Link to='/products' > <button class="btn btn-card text-uppercase text-white">Start shopping</button></Link >
      </div >
      :
      <div className="container pt-4">
        <div className="totalPrice w-50 text-center m-auto mb-4">
          <div className="card shadow p-4">
            <h2>Total Price : {totalPrice.toFixed(2)} $</h2>

          </div>
        </div>
        {
          cartList.map((product) => {
            return (
              <div className="card w-75 shadow p-4 m-auto mb-4">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <div className="image h-100"><img className="w-100" src={product.image} alt="" /></div>
                  </div>
                  <div className="col-md-4">
                    <h4>{product.title}</h4>
                  </div>
                  <div className="col-4 text-center">
                    <h4 className='m-auto'>price : <span className="price">{product.price} </span>$</h4>
                    <div className="buttons m-auto">
                      <Button st='btn-card' operation={() => increamentCounter(product)} text='+' />
                      <Counter count={product.counterBuy} />
                      <Button st='btn-card bg-danger' operation={() => decreamentCounter(product)} text='-' />
                    </div>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-danger" onClick={() => removeAll(product)}>Remove</button>
                  </div>

                </div>
              </div>
            );
          })
        }

      </div>
  )
}

export default Cart;