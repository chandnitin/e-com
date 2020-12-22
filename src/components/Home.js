import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
export default class Home extends Component {
    render() {
        return (
            <div>
            
            
            <Container color="primary">
            <Box className="align-center">
                <h1>e - Cart </h1>
                <p> This Online shoping 50% Descount, Let's hariup...</p>
                <br/>
                <Button variant="outlined" color="primary">
                   Book Now
              </Button>
              </Box>
            </Container>
           

        </div>
        )
    }
}
