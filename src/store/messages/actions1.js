export const FB_UPDATE_MESSAGE = "MESSAGE::FB_UPDATE_MESSAGE";

export const fbUpDateMessage = (messageList) => ({
    type: FB_UPDATE_MESSAGE,
    messageList
});