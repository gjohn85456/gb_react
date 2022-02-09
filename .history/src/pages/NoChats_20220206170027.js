import ChatList from '../components/ChatList';
import { useParams } from 'react-router-dom';
const NoChats = () => {

    return (
        // <div> <ChatList chats={chats} chatId={chatId} /> </div>
        <div> <ChatList chats={chats} /> </div>
    )
}

export default NoChats 
