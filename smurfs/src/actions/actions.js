import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchSmurf = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF})
    axios
        .get('http://localhost:3333/smurfs')
        .then( res => {
            console.log("Fetch success", res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('Error, could not retrieve smurf information', err)
            dispatch({ type: FETCH_FAIL, payload: err})
        })
}

export const POST_SMURF = 'POST_SMURF';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const postSmurfs = (smurf) => (dispatch) => {
    dispatch({ type: POST_SMURF})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then( res => {
            console.log("Post was successful", res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data})
        })
        .catch( err => {
            console.log("Error with posting", err);
            dispatch({ type: POST_FAIL, payload: err})
        })
}