import { Box, Fab, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Send } from '@mui/icons-material';
import PropTypes from 'prop-types';

const ControlPanel = (props) => {
    const [value, setValue] = useState('');

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, []);
    return (
        <div>
            <Box
                sx={{
                    marginTop: '20px'
                }}
                component='form'
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