import React from 'react';
import Button from '@material-ui/core/Button';

export default class Card extends React.Component {
    render() {
        return (
        <div className = "cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEwkToei94vw06dnBMIqtvWyUZOfQaz68B7Q&usqp=CAU" alt="dresser"/>
            <ul>
                <li>Price: $1 </li>
                <li>Description: Looks hella Good</li>
            </ul>
            <Button variant="outlined" color="primary">
                Buy Now
            </Button>
        </div>
        )
    }
}