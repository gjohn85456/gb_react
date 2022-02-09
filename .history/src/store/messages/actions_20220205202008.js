export const ADD_MEESAGE = "MESSAGE::ADD_MESSAGE";

export const addMessage = (chatId, message) = ({
    type: ADD_MEESAGE,
    chatId,
    message
})