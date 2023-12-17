import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import "./single-product.scss";

const SinglePrduct = () => {
    const navigate = useNavigate();
    const {products} = useContext(ProductsContext);
    const {addProduct, cartItems, increase} = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=> {
        const product = products.find(item => Number(item.id) === Number(id));

        if(!product){
            return navigate('/shop')
        }
        setProduct(product)
    }, [id, products, navigate])

    if(!product){return null};

    const { imageUrl, title, price , description } = product;
    const itemInCard = isInCart(product, cartItems);

    return(
        <Layout>
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt="product img" />
                </div>
                <div className="product-details">
                    <div className="name-price">
                        <h3>{title}</h3>
                        <p>{price} $</p>
                    </div>
                    <div className="add-to-cart-btns">
                        {
                        !itemInCard &&
                        <button className="button is-white nomad-btn" id="btn-white-outline"
                        onClick={() =>addProduct(product)}>
                            ADD TO CART
                        </button>
                        }
                        {
                        itemInCard &&
                        <button className="button is-white nomad-btn" id="btn-white-outline"
                        onClick={() => increase(product)}>
                            ADD MORE
                        </button> 
                        }
                        
                        <button className="button is-black nomad-btn" id="btn-white-outline"
                        onClick={() => navigate('/cart')}>
                            PROCEED TO CHEKOUT
                        </button>
                    </div>
                    <div className="product-description">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default SinglePrduct;