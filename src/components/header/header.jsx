import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import { auth } from '../../firebase';
import { UserContext } from '../../context/user-context';
import { CartContext } from '../../context/cart-context';
import './header.scss';


const Header = () =>{
  const { clearCart } = useContext(CartContext);
  const handleSignOut = async () => {
    try {
    
      await auth.signOut();

      clearCart();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };
    const { user } = useContext(UserContext);
    return(
        <nav className="nav-menu container">
            <div className="logo">
                <Link to='/'>NOMAD</Link>
            </div>
           <ul>
             <li>
              <Link to='/'>HOME</Link>
             </li>
             <li>
              <Link to='/shop'>SHOP</Link>
             </li>
             {
          !user && 
          <li>
            <Link to='/sign-in'>
              Sign In
            </Link>
          </li>
        }
        {
          user && 
          <li onClick={handleSignOut}>
            Sign Out
          </li>
        } 
        {
          !user && 
          <li>
            <Link to='/sign-up'>
              Sign Up
            </Link>
          </li>
        }
           </ul>
          <CartIcon/> 
        </nav>
    )
}


export default Header;