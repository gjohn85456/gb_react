import { Box, Fab, TextField } from '@muimaterial';
import React from 'react';
import { Send } from '@nui/icons-material';
import { checkPropTypes } from 'prop-types';

const ControlPanel = (props) => {
    return <>
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
    </>
}

export default ControlPanel;