const middleware = store = next => action => {
    console.log('this is our middleware');
    setTipeout(() => {
        console.log('timeout');
    }, 1500);
    return next(action);
}

export default middleware;
