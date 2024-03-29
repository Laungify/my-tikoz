import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";

import { useToggleComponent } from "../../../common/customHooks";
import { ToggledSourceController } from "../../../common/sharedComponents"
import {
  cartSelector,
  cartTotalItemSelector,
  cartTotalPriceSelector,
} from "../../../features/selectors";

import {
  onIncrementProduct,
  onDecrementProduct,
  onRemoveCartItem,
  onClearCart,
} from "../../../features";

import "./Cart.scss";
const Cart = () => {
  const [toggleSourceCart, setToggleSourceCart, toggleValCart, setToggleValCart] = useToggleComponent('cart', false);

  const dispatch = useDispatch();

  const cart = useSelector(cartSelector);
  let totalItems = useSelector(cartTotalItemSelector);
  let totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <ToggledSourceController
          toggleVal={toggleValCart}
          toggleSource={toggleSourceCart}
          setToggleVal={setToggleValCart}
          setToggleSource={setToggleSourceCart}
        >
          <button
            type="button"
            className="cart-heading"
            onClick={() => handleSourceChange()}
          >
            <AiOutlineLeft />
            <span className="heading">
              Back
              <span className="cart-num-items">( {totalItems} items)</span>
            </span>
          </button>

        </ToggledSourceController>

        {cart.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link
              href="/shop
            "
            >
              <ToggledSourceController
                toggleVal={toggleValCart}
                toggleSource={toggleSourceCart}
                setToggleVal={setToggleValCart}
                setToggleSource={setToggleSourceCart}
              >
                <button type="button" onClick={() => handleSourceChange()} className="btn">
                  Continue Shopping
                </button>

              </ToggledSourceController>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cart.length >= 1 &&
            cart.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.imageUrl} className="cart-product-image" />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.title}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div className="cart-feature__wwrapper">
                      <p className="quantity-desc">
                        <span className="minus">
                          <AiOutlineMinus
                            onClick={() =>
                              dispatch(onDecrementProduct(item.id))
                            }
                          />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus">
                          <AiOutlinePlus
                            onClick={() =>
                              dispatch(onIncrementProduct(item.id))
                            }
                          />
                        </span>
                      </p>
                      <span className="remove-item">
                        <AiOutlineDelete
                          onClick={() => dispatch(onRemoveCartItem(item.id))}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {cart.length >= 1 && (
            <h3 className="clear-cart" onClick={() => dispatch(onClearCart())}>
              Clear Cart
            </h3>
          )}
        </div>

        {cart.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
