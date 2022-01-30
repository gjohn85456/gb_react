const ChatList = ({ chats, chatId }) => {
    return <div className={'chatList'}>
        {Object.keys(chats).map((chat, i) => (
            <div key={i}>{chats[chat].name} </div>
        ))}
    </div>
}

export default ChatList