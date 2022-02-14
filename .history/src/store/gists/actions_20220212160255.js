export const GET_GESTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GESTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

export const getGistsRequest = () => ({
    type: GET_GESTS_REQUEST
});

export const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data
});

export const getGistsFailure = (err) => ({
    type: GET_GESTS_FAILURE,
    payload: err
})
