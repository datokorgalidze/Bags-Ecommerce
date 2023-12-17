import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import ShoppingBag from '../../assets/shopping-bag.png'
import { CartContext } from "../../context/cart-context";
import './cart-icon.scss';


const CartIcon = () => {
    const {itemCount} = useContext(CartContext)
    const navigate = useNavigate()
    // console.log('cartItems:', cartItems)
    return(
        <div className="cart-container" onClick={() => navigate('/cart') }>
            <img src={ShoppingBag} alt="shopping-icon"/>
            {itemCount > 0 ?  <span className="cart-count">{itemCount}</span> : null }
           
        </div>
    )
}

export default CartIcon;

