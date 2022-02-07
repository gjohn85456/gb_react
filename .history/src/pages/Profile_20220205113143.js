import { useCallback } from "react";
import { store } from "../store/index"
import { toggleShowName } from "../store/profile/chatActions";

const Profile = () => {
    const { showName, name } = store.getState();
    const dispatch = store.dispatch;

    const setShowName = useCallback(() => {
        dispatch(toggleShowName)
    }, [dispatch])


    return (
        <div>
            <h4>Profile</h4>
            <Input
                type="checkbox"
                checked={showName}
                value={showName}
                onCahnge={setShowName}
            />

            {showName && <div>{name}</div>}
        </div>
    );
};

export default Profile; 