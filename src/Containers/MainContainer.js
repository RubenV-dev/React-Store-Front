import React from 'react';
import CardContainer from './CardContainer'
import Banner from '../Components/banner'
import { Container } from '@material-ui/core';

export default class MainContainer extends React.Component {
    render(){
        return (
            <Container maxWidth="lg">
                <Banner />
                <CardContainer />
            </Container>
        )
    }
}