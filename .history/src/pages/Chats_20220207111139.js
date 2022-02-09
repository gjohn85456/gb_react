import MessageList from '../components/MessageList';
import ChatList from "../components/ChatList";
import ControlPanel from '../components/ControlPanel';


const Chats = () => {
    return (
        <div className={'chats'}>
            <ChatList />
            <MessageList />
            <ControlPanel />
        </div>
    );
};

export default Chats;