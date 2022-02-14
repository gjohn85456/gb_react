import { useCallback, useEffect, useState } from 'react';
import { API_URL_GIST, API_URL_PUBLIC } from '../contants/endpoints';

const gists = [];

const Gists = () => {
    const [gists, setGists] = useState([]);

    useEffect(() => {
        fetch(API_URL_PUBLIC)
            .then(!response.ok) {
            throw new Error('Request failed with status ${response.status}');
        }
    }, []);

    const renderGist = useCallback((gist) => (
        <li key={gist.id}> {gist.description || 'No description'}</li>
    ), []);
    return <ul>{gists.map(renderGist)}</ul>
}

export default Gists;
