import { useCallback, useEffect, useState } from 'react';
import { API_URL_GIST, API_URL_PUBLIC } from '../contants/endpoints';

const gists = [];

const Gists = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
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
            });
    }, []);

    const renderGist = useCallback((gist) => (
        <li key={gist.id}> {gist.description || 'No description'}</li>
    ), []);

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGist}>Retry</button>
            </>
        )
    }

    return <ul>{gists?.map(renderGist)}</ul>
}

export default Gists;
