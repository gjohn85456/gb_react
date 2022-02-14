import { Box, Paper, TextField } from '@mui/material'
const Login = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
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
                    placeholder='email'
                    name={'email'}
                    value={email}
                    onChange={handleEmailChange}
                />

            </Paper>
        </form>
    </Box>;
}
export default Login