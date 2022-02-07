import MessageList from '../components/MessageList';
import ChatList from "../components/ChatList";


const Chats = () => {
    return (
        <div className={'chats'}>
            <ChatList />
            <MessageList />
        </div>
    );
};

export default Chats;