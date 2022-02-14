import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { API_URL_GIST, API_URL_PUBLIC } from '../contants/endpoints';

const Gists = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const requestGists = useCallback(() => {
        setLoading(true);
        fetch(API_URL_PUBLIC)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new ErrorEvent('Request failed with status ${respose.status}');
                }
                return response.json();
            })
            .then((result) => setGists(result))
            .catch((err) => {
                setError(true);
                console.error(err)
            })
            .finally(() => setLoader(false));
    }, [])

    useEffect(() => {
        requestGists();
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
