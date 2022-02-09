import { Box, Fab, TextField } from '@mui/material';
import React from 'react';
import { Send } from '@mui/icons-material';
import { checkPropTypes } from 'prop-types';

const ControlPanel = (props) => {
    return (
        <div>
            <Box
                sx={{
                    marginTop: '20px'
                }}
                component='from'
                noValidate
                autoComplete='off'
                flexDirection='row'
                justifyContent='space-between'
            >
                <TextField
                    autoFocus
                    style={{ margin: '0 20px' }}
                    id='outlined-basic'
                    label='Enter a message'
                    variant='filled'
                    value={props.value}
                    onChange={props.handleChange}
                />
                <Fab onClick={props.handleSend}>
                    <Send />
                </Fab>
            </Box>
        </div>
    )

}

export default ControlPanel;