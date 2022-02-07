import { store } from "../store/index"

const Profile = () => {
    const { showName, name } = store.getState();
    console.log(showName, name);
    return (
        <div>
            {showName && <div>{name}</div>}

        </div>
    );
};

export default Profile; 