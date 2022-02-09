import { useParams } from 'react-router-dom';
import MessageList from '../components/MessageList';
import ChatList from "../components/ChatList";
import NoChats from "./NoChats";

const Chats = () => {
    return (
        <div className={'chats'}>
            <ChatList />
            <MessageList />
        </div>
    );
};

export default Chats;