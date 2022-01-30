import { useState } from "react";
import { useParams } from 'react-router-dom';
import MessageList from '../components/MessageList';
import ChatList from "../components/ChatList";
import NoChats from "./NoChats";


const AUTHORS = { BOT: 'bot', NUMAN: 'human' };

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ id: 0, text: "FirstMessage from chat1", author: 'human' }],
    },
    id2: {
        name: "Chat2",
        messages: [
            { id: 0, text: "FirstMessageHereToo! from chat2", author: 'human' },
            { id: 1, text: "Hi human from chat2", author: 'bot' }
        ],
    },
};

const Chats = () => {
    const [chatsList, setChatsList] = useState(initialChats);
    let { chatId } = useParams();
    console.log(chatId);
    console.log(chatsList[chatId]);

    return chatsList[chatId] ? (
        <div className={'chats'}>
            <ChatList chats={chatsList} chatsId={chatId} />
            <MessageList messages={chatsList[chatId].messages} />
        </div>
    ) : <NoChats />
}

export default Chats