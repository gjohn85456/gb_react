import { useCallback, useState } from "react";
import { CHANGE_NAME } from "../store/profile/chatActions";
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
    const [value, setValue] = useState('');
    const { name, showName } = useSelector(state => state);
    const dispatch = useDispatch();


    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch({ type: CHANGE_NAME, playload: value })
    }, [])
    return (
        <div>
            <h4>Profile</h4>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
            <span>Show Name</span>
            <button onClick={setName}> Изменить имя
            </button>
        </div>
    );
};

export default Profile; 