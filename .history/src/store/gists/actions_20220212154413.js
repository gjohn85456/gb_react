const GET_GISTS = 'GISTS::GET_GIST';
const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';

const getGists = () => ({
    type: GET_GISTS
});

const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    palyload: gists
})

const getALLGists = () => async (dispatch, setSate) => {
    const response = await fetch(API_URL_PUBLIC);
}