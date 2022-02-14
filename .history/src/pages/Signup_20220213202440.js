import { Box, Paper, TextField, Button } from '@mui/material'
import { useState } from 'react';
import useAuth from '../hook/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebase from '../service/firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth(firebase)
        await createUserWithEmailAndPassword(auth, email, password)
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
            <Paper sx={{
                pl: 10,
                pb: 2
            }}
            >
                <TextField
                    margin="normal"
                    type='email'
                    placeholder='email'
                    name={'email'}
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <TextField
                    margin="normal"
                    type='password'
                    placeholder='password'
                    name={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <br />
                <Button type='submit' variant='contained'>Login</Button>
            </Paper>
        </form>
    </Box>;
}

