import React from "react";
import { useNavigate } from "react-router-dom";
import './hero.scss';

const Hero = () => {
    const navigate = useNavigate()
     return(
    <section className="hero is-info is-large hero-image">
        <div className="hero-body">
            <div className="container">
                <h1 className="hero-title">
                Bags Reimagined For Modern Life.
                </h1>
                <div className='shop-now-btn'>
                    <button className='button is-black' id='shop-now'
                    onClick={()=>navigate('/shop')}>
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    </section>
     )  
}

export default Hero;