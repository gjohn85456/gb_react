import { useCallback, useState } from "react";
import { store } from "../store/index"
import { toggleShowName } from "../store/profile/chatActions";

const Profile = () => {
    const { showName, name } = store.getState();
    const dispatch = store.dispatch;
    const [dummy, setDummy] = useState(1);

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
        let a = dummy;
        a++
        setDummy(a);
    }, [dispatch])


    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    );
};

export default Profile; 