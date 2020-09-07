import React from 'react';
import Card from '../Components/card'

export default class CardContainer extends React.Component {

    // renderCards = () => {
    //     for (let cardNumber= 0; cardNumber < 11; cardNumber++){
    //         return <Card/>
    //     }
    // }

    render() {
        let cardArray = []
        for (let cardNumber= 0; cardNumber < 11; cardNumber++){
            cardArray.push(<Card className="cards"/>)
        }
        return (
        <div className = "card-container">
            {cardArray}

        </div>
        )
    }
}