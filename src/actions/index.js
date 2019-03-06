import axios from 'axios';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const FETCH_SWAPI_START = "FETCH_SWAPI_START";
export const FETCH_SWAPI_SUCCESS = "FETCH_SWAPI_SUCCESS";
export const FETCH_SWAPI_FAILURE = "FETCH_SWAPI_FAILURE";

export fetchSwapiPeople = () => dispatch => {
    dispatch({ type: FETCH_SWAPI_START })

    axios.get('https://swapi.co/api/people/')
        .then(res => dispatch({ type: FETCH_SWAPI_SUCCESS }))
        .catch(err => dispatch({ type: FETCH_SWAPI_FAILURE })
}
