import React from "react";
import Layout from "./shared/layout";

const NotFound = () => {
    const style = {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:'30px'
    }

    return(
       <Layout>
          <p style={style}>Unfortunately we can't find that page</p>
       </Layout>
    )
}

export default NotFound;