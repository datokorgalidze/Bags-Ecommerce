import React from "react";
import { useNavigate } from 'react-router-dom';
import StudioBag from "../../assets/studio-bag.png";
import './main-section.scss';


const MainSection = () =>{
    const navigate = useNavigate();
    return(
    <div className="main-section-container">
        <div className="main-section-middle">
            <div className="ms-m-image">
                <img src={StudioBag} alt="studio img" /> 
            </div>
            <div className="ms-m-description">
                <h2>Designed for fashion. Crafted for sport.</h2>
                <p>
                    We make products that effortlessly transition from day to night. 
                    From the board room to the fitness studio, and everywhere in between, 
                    each Nomads piece is thoughtfully created to be the perfect balance of 
                    form and function.
                </p>
                <button className="button is-black" id="shop-now"
                 onClick={()=>navigate('/product/1')}>
                   STUDIO BAG
                </button>
            </div>
        </div>
    </div>   
    )
   
}

export default MainSection;

