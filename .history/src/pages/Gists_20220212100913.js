import { useCallback, useEffect, useState } from 'react';
import { API_URL_GIST, API_URL_PUBLIC } from '../contants/endpoints';

const gists = [];

const Gists = () => {
    const [gists, setGists] = useState([]);

    useEffect(() => {
        fetch(API_URL_PUBLIC)
            .then((response) => {
                if (!response.ok) {
                    throw new ErrorEvent('Request failed with status ${respose.status}');
                }
            })
            .then((result) => setGists(result))
            .catch((err) => console.error(err));
    }, []);

    const renderGist = useCallback((gist) => (
        <li key={gist.id}> {gist.description || 'No description'}</li>
    ), []);
    return <ul>{gists?.map(renderGist)}</ul>
}

export default Gists;
