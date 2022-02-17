import { FB_ADD_CHAT, FB_DELETE_CHAT, FB_UPDATE_CHAT } from './actions1'

const initialState = () => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    let chatArr;
    get(child(dbRef, '/chats')).then((snapshot) => {
        if (snapshot.val()) {
            const obj = snapshot.val();
            const chatIds = Object.keys(obj);
            chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }));
        } else {
            chatArr = [];
            console.log('нет данных');
        }
        return chatArr;
    });
    return chatArr;
}

const fbChatsReducer = (state = initialState(), action) => {

}

export default fbChatsReducer;


