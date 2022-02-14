import { useCallback, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL_GIST, API_URL_PUBLIC } from '../contants/endpoints';
import { getALLGists } from '../store/middleware';

const Gists = () => {

    const dispatch = useDispatch();

    const gists = useSelector()

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
