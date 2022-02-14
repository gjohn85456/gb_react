import { Box, Paper, TextField } from '@mui/material'
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {

    }



    return <Box sx={{
        display: 'flex',
        flexWrap: 'wrap', '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500
        }
    }}>
        <form onSubmit={handleSubmit}>
            <p>Fill in the form below to login to your account.</p>
            <Paper>
                <TextField
                    type='email'
                    placeholder='email'
                    name={'email'}
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <TextField
                    type='password'
                    placeholder='password'
                    name={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />

            </Paper>
        </form>
    </Box>;
}
export default Login