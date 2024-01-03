import React from 'react'
import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';

export default function LoginForm() {
  return (
    <div>
        <Paper
            className='login-form'
            elevation={10}
            square={false}>
            <Typography
                variant='h5'
                gutterBottom
                fontWeight={900}
                textAlign={'center'}
            >Log In</Typography>
            <Typography
                fontFamily={'Sans-serif'}
            >Email</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
            size='small' />
            <Typography
                fontFamily={'Sans-serif'}
            >Password</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
            size='small' />
            <Button variant="contained">Log In</Button>
        </Paper>
    </div>
  )
  
}
