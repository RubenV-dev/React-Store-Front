import React from 'react';
import Button from '@material-ui/core/Button';

const Product = () => {
    return (
        <div>
            <h1>Main Product Page </h1> 
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEwkToei94vw06dnBMIqtvWyUZOfQaz68B7Q&usqp=CAU" alt="dresser" /> 
            <p>$80,000</p>
            <p>Quantity: 20</p>
            <Button variant="outlined" color="primary">Buy Now</Button>
        </div>
    )
}

export default Product