import { useCallback useState } from "react";
import { toggleShowName } from "../store/profile/chatActions";
import { useSelector, useDispatch } from 'react-redux'


const Profile = () => {
    const [value, setValue] = useState('');
    const { name, showName } = useSelector(state => state);
    const dispatch = useDispatch();


    const handleChange = useCallback(() => {
        dispatch(toggleShowName);

    }, [dispatch])


    return (
        <div>
            <h4>Profile</h4>
            <input
                type="text"
                value={showName}
                onChange={handleChange}
            />
            <span>Show Name</span>
            <button> Изменить имя
            </button>
        </div>
    );
};

export default Profile; 