import React from "react";
import "./footer.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <div className="footer">
            {year} &copy; NOMAD Store 
          <p>D.Korgalidze</p>
        </div>
    )
}

export default Footer