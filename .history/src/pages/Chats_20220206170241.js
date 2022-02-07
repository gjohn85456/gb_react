import { useParams } from 'react-router-dom';
import MessageList from '../components/MessageList';
import ChatList from "../components/ChatList";
import NoChats from "./NoChats";

const Chats = () => {
    let { chatId } = useParams();
    return chats[chatId] ? (
        <div className={'chats'}>
            <ChatList chats={chats} chatId={chatId} />
            <MessageList messageList={chats[chatId].messages} />
        </div>
    ) : <NoChats />
}

export default Chats