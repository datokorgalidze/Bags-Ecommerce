import React, {useContext} from "react";
import { isInCart } from "../../helpers";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import './featured-product.scss';


const FeaturedProduct = (props) => {
    const navigate = useNavigate();
    const { title, imageUrl, price, id, description} = props;
    const {addProduct, cartItems, increase} = useContext(CartContext)
    const product = {title, imageUrl, price, id, description}
    const itemInCard = isInCart(product, cartItems)


    return(
        <div className="featured-product">
            <div className="featured-image">
               <img src={imageUrl} alt="product-img" onClick={()=>navigate(`/product/${id}`) }/>  
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>{price}$</p>
                {
                 !itemInCard &&
                 <button className="button is-black nomad-btn"
                  onClick={() => addProduct(product)}>
                  ADD TO CART
                </button>
                }
                {
                  itemInCard &&
                  <button className="button is-white nomad-btn"
                  id="btn-white-outline"
                  onClick={() => increase(product)}>
                  ADD MORE
                </button>
                }
            </div>
        </div>
    )
}

export default FeaturedProduct;