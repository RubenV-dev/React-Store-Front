import React from 'react';
import CardContainer from './CardContainer'
import Banner from '../Components/banner'
// import { Container } from '@material-ui/core';
import Product from '../Components/product'

export default class MainContainer extends React.Component {
    render(){
        return (
            <div className="main-container">
                <h1 id="store-name">True Decor</h1>
                <Banner />
                <CardContainer />
                <Product />
            </div>
        )
    }
}

//for product description....
// quantity of how many are available. when people click buy now and it reached 0 we are out of stock
// product description.
// sizes of items
//price of items
//image slides like facebook marketplace.
