export const ADD_CHAT = "CHATS::ADD_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name
})
// export const ADD_CHAT = "CHATS::ADD_CHAT";

// export const addChat = (name) => ({
//     type: ADD_CHAT,
//     name
// });

// export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

// export const addMessage = (chatId, message) => ({
//     type: ADD_MESSAGE,
//     chatId,
//     message
// })