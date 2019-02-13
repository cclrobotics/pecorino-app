import React from 'react'
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import Api from './Api'

class Drive extends React.Component{

	left = async () => {
		Api.get('/drive/left')
	}

        right = async () => {
		Api.get('/drive/right')
	}

        forward = async () => {
		Api.get('/drive/forward')
	}

        backward = async () => {
		Api.get('/drive/backward')
	}

	render(){
		return(
			<Paper>
				<Grid container={true} direction='column' className='buttonGroup' spacing={8}>
					<Grid item={true}>
						<Typography><strong>Drive</strong></Typography>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.left}>LEFT</Button>
                                                <Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.right}>RIGHT</Button>
                                                <Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.forward}>FORWARD</Button>
                                                <Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.backward}>BACKWARD</Button>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Drive