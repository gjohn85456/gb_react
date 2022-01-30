import React from 'react';
import PropTypes from 'prop-types';


const MessageList = ({ messages }) => {
    return <div className='messages_space'>
        {messages.map((message, id) => (
            <div className={`messages_${message.author === 'human' ? 'human' : 'robot'}`} key={id}>
                {message.text} - say: {message.author}
            </div>
        ))}
    </div>
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
        id: PropTypes.number

    }))
}

export default MessageList