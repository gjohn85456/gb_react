import { store } from "../store/index"

const Profile = () => {
    const { showName, name } = store;
    return (
        <div>Profile</div>
    )
}

export default Profile