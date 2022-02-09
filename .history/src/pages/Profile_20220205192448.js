import { useCallback, useState } from "react";
import { CHANGE_NAME } from "../store/profile/chatActions";
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
    const { name, showName } = useSelector(state => state);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();


    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch({ type: CHANGE_NAME, playload: value })
    }, [dispatch, value]);

    console.log(setName);


    return (
        <div>
            <h4>Profile</h4>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
            <button onClick={setName}> Изменить имя
            </button>
        </div>
    );
};

export default Profile; 