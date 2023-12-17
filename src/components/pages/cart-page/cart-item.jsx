
import React from "react";
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from '../../icons/icons';
import { CSSTransition } from 'react-transition-group';
import "./cart-page.scss";

const CartItem = (props) => {
    const { title, imageUrl, price, quantity, description, id, increase, decrease, removeProd } = props
    const product = { title, imageUrl, price, quantity, description, id }

    return (
        <CSSTransition key={id} classNames="fade" timeout={500} in={quantity > 0 }>
            <div className="cart-item">
                <div className="item-image">
                    <img src={imageUrl} alt="product" />
                </div>
                <div className="name-price">
                    <h4>{title}</h4>
                    <p>{price}$</p>
                </div>
                <div className="quantity">
                    <p>{`Quantity: ${quantity}`}</p>
                </div>
                <div className="btns-container">
                    <button className="btn-increase" onClick={() => increase(product)}>
                        <PlusCircleIcon width='20px' />
                    </button>

                    {quantity === 1 && (
                        <CSSTransition key="remove" classNames="fade" timeout={500}>
                            <button className="btn-trash" onClick={() => removeProd(product)}>
                                <TrashIcon width='20px' />
                            </button>
                        </CSSTransition>
                    )}

                    {quantity > 1 && (
                        <button className="btn-decrease" onClick={() => decrease(product)}>
                            <MinusCircleIcon width='20px' />
                        </button>
                    )}
                </div>
            </div>
        </CSSTransition>
    );
}

export default CartItem;

