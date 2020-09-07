import React from 'react';
import CardContainer from './CardContainer'
import Banner from '../Components/banner'

export default class MainContainer extends React.Component {
    render(){
        return (
            <div className = "main">
                <Banner />
                <CardContainer />
            </div>
        )
    }
}