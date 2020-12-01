import React from 'react'
import Banner from '../Components/banner'
import Product from '../Components/product'
import CardContainer from '../Containers/CardContainer'

const Home = () => {
    return (
        <div>
            <h1 id="store-name">True Decor</h1>
            <Banner />
            <CardContainer />
            <Product />
        </div>
    )
}

export default Home