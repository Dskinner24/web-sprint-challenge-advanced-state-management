import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchSmurf = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF})
    axios
        .get('http://localhost:3333')
        .then( res => {
            console.log("Fetch success", res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('Error, could not retrieve smurf information', err)
            dispatch({ type: FETCH_FAIL, payload: err})
        })
}