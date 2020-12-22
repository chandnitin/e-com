import React, { Component } from 'react'
import { Box ,Button} from '@material-ui/core'


export default class BoxTest extends Component {
    render() {
        return (
            <div>
                
            <Box component="span" m={1}>
            <h1> Box</h1>
            </Box>
            <Box color="text.primary" clone>
  <Button />
</Box>
            </div>
        )
    }
}
