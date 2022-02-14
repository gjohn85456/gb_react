import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL_GIST, API_URL_PUBLIC } from '../contants/endpoints';
import { getALLGists } from '../store/middleware';

const Gists = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const requestGists = () => {
        dispatch(getALLGists());
    }

    useEffect(() => {

    }, []);

    const renderGist = useCallback((gist) => (
        <li key={gist.id}> {gist.description || 'No description'}</li>
    ), []);

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }

    return <ul>{gists?.map(renderGist)}</ul>
}

export default Gists;
