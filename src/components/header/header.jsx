import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import { auth } from '../../firebase';
import { UserContext } from '../../context/user-context';
import { CartContext } from '../../context/cart-context';
import './header.scss';
import { toast } from "react-toastify";


import { useNavigate } from "react-router-dom";


const Header = () =>{
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate()
  const active = window.location.hash;
  console.log(active) 
  const handleSignOut = async () => {
  
    try {
      toast.success("You are Sing out")
      navigate("/")
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
                <Link   
                to='/'
                >NOMAD
                </Link>
            </div>
           <ul>
             <li>
              <Link className={`nav-link ${active === "#/" && "active"}`}
              to='/'>
                HOME
                </Link>
             </li>
             <li>
            
                <Link className={`nav-link ${active === "#/shop" && "active"}`} to='/shop'>
                    SHOP
                  </Link>

             </li>
             {
          !user && 
          <li>
            <Link className={`nav-link ${active === "#/sign-in" && "active"}`}
            to='/sign-in'>
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
            <Link className={`nav-link ${active === "#/sign-up" && "active"}`}
             to='/sign-up'>
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