const middleware = store => next => action => {
    console.log('this is our middleware');
    setTimeout(() => {
        console.log('timeout');
    }, 1000);
    return next(action);
}

export default middleware;
