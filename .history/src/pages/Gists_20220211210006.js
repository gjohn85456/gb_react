import { useCallback, useState } from 'react';

const gists = [];

const Gists = () => {
    const [gists, setGists] = useState([]);
    const renderGist = useCallback((gist) => (
        <li key={gist.id}> {gist.description || 'No description'}</li>
    ), []);
    return <ul>{gists.map(renderGist)}</ul>
}

export default Gists;
