import { Box, Paper, TextField } from '@mui/material'
const Login = () => {
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
                <TextField>
                </TextField>
            </Paper>
        </form>
    </Box>;
}
export default Login