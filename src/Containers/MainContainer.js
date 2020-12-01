import React from 'react';
// import { Container } from '@material-ui/core';
import { Route, Switch} from 'react-router-dom'
import Home from '../Components/home'

export default class MainContainer extends React.Component {
    render(){
        return (
            <div className="main-container">
               <Switch>
                    <Route exact path='/' render={() => {return (<Home />)}}/>
               </Switch>
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
