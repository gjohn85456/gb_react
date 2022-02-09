import { store } from "../store/index"

const Profile = () => {
    const { showName, name } = store.getState().profile;
    console.log(showName, name);
    return (
        <div>Profile</div>
    );
};

export default Profile;