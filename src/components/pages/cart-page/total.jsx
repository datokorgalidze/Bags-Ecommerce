// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./cart-page.scss";


// const Total = ({ itemCount, total, clearCart }) => {
//       const navigate = useNavigate()

//       return(
//         <div className="total-container">
//            <div className="total">
//              <p>Total Product: {itemCount}</p>
//              <p>{`Total: ${total}$`}</p>
//            </div>
//            <div className="checkout">
//             <button className="button is-black" 
//             onClick={() => navigate('/checkout')}>CHECKOUT</button>
//             <button className="button is-white" onClick={() => clearCart()}>CLEAR</button>
//            </div>
//         </div>
//       )
//    }

//    export default Total;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import "./cart-page.scss";

const Total = ({ itemCount, total, clearCart }) => {
    const navigate = useNavigate();
    const [isClearing, setIsClearing] = useState(false);

    const handleClearCart = () => {
      setIsClearing(true);
      // Assuming clearCart is asynchronous, you can reset isClearing after it's done
      clearCart();
      setTimeout(() => {
          setIsClearing(false);
      }, 500); // Adjust the timeout based on your animation duration
  };

  console.log('Is Clearing:', isClearing);

    return (
        <div className="total-container">
            <div className="total">
                <p>Total Product: {itemCount}</p>
                <p>{`Total: ${total}$`}</p>
            </div>
            <div className="checkout">
                <button className="button is-black" onClick={() => navigate('/checkout')}>
                    CHECKOUT
                </button>
                <CSSTransition
                    key="clearButton"
                    classNames="fade"
                    timeout={{ enter: 500, exit: 1000 }} 
                    in={isClearing} 
                >
                    
                    <button className="button is-white" onClick={handleClearCart}>
                        CLEAR
                    </button>
                </CSSTransition>
            </div>
        </div>
    );
}

export default Total;

