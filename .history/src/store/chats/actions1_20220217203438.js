
export const FB_ADD_CHAT = "CHATS::FB_ADD_CHAT";
export const FB_DELETE_CHAT = "CHATS::FB_DELETE_CHAT";
export const FB_UPDATE_CHAT = "CHATS::FB_UPDATE_CHAT";

export const fbAddChat = (name) => ({
    type: FB_ADD_CHAT,
    name
});

export const fbDeleteChat = (name) => ({
    type: FB_DELETE_CHAT,
    name
});

export const fbUpDateChat = (data) => ({
    type: FB_UPDATE_CHAT,
    data
});