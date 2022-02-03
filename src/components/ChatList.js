import { Link } from "react-router-dom"

const ChatList = ({ chats, chatId }) => {

    return <div className={'chatList'}>
        {Object.keys(chats).map((chat, i) => (
            <Link to={`/chats/${chat}`} style={{ color: chat === chatId ? 'grey' : 'black' }} key={i}>{chats[chat].name} </Link>
        ))}
    </div >
}

export default ChatList