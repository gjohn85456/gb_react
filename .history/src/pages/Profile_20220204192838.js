import { store } from "../store/index"

const Profile = () => {
    const { showName, name } = store.getState();
    console.log(showName);
    return (
        <div>Profile</div>
    );
};

export default Profile;