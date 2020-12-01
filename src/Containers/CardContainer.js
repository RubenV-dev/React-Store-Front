import React from 'react';
import Card from '../Components/card'
import Grid from '@material-ui/core/Grid';

export default class CardContainer extends React.Component {

    // renderCards = () => {
    //     for (let cardNumber= 0; cardNumber < 11; cardNumber++){
    //         return <Card/>
    //     }
    // }

    render() {
        let cardArray = []
        for (let cardNumber= 0; cardNumber < 10; cardNumber++){
            cardArray.push(<Card key={cardNumber}/>)
        }
        return (
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            style={{marginTop: "50px"}}
            >
                {cardArray}
            </Grid>
        )
    }
}