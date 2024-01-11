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
                variant='h4'
                gutterBottom
                fontWeight={900}
                textAlign={'center'}
                className='Poppins'
            >LOG IN</Typography>

            <div className='textfield-login'>
              <TextField id="outlined-basic" label="Email" variant="outlined" className='textfield-login1' />
              <TextField id="outlined-basic" label="Password" variant="outlined" type='password'/>
            </div>
            <div className='btn-login'>
              <Button 
              className='style'
              variant="contained"
              >Log In</Button>
            </div>
            
        </Paper>
    </div>
  )
  
}
