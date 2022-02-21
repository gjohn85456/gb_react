export const FB_GET_CHAT = "CHATS::FB_GET_CHAT";
export const FB_UPDATE_CHATS = "CHATS::FB_UPDATE_CHATS";


export const fbGetChat = (data) => ({
    type: FB_GET_CHAT,
    data
});

export const fbListChatsUpdate = (data) => ({
    type: FB_UPDATE_CHATS,
    data
});