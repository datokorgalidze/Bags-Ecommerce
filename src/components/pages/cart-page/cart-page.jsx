import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import CartItem from "./cart-item";
import Total from "./total";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./cart-page.scss";

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProd, clearCart } = useContext(CartContext)
    const funcs = { increase, decrease, removeProd }

    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className="empty-cart">Your Cart is empty</div>
                        :
                      <>
                          <div className="cart-page">
                              <TransitionGroup className="cart-item-container">
                                  {cartItems.map(item => (
                                      <CSSTransition key={item.id} classNames="fade" timeout={500}>
                                          <CartItem {...item} key={item.id} {...funcs} />
                                      </CSSTransition>
                                  ))}
                              </TransitionGroup>
                              <Total itemCount={itemCount} total={total} clearCart={clearCart} />
                          </div>
                      </>
                   }
             </>
        </Layout>
    )
}

export default CartPage;

