import ChatList from '../components/ChatList';
import { useParams } from 'react-router-dom';
const NoChats = ({ chats }) => {
    // const { chatId } = useParams();
    // console.log(chatId);
    return (
        // <div> <ChatList chats={chats} chatId={chatId} /> </div>
        <div> <ChatList chats={chats} /> </div>
    )
}

export default NoChats 
