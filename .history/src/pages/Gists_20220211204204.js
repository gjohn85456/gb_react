const gists = [];

const Gists = () => {
    const renderGists = useCallback((gist) => (
        <li key={gist.id}> {gist.description || 'No description'}</li>
    ), []);
}