import axios from "axios";

export const FETCH_SWAPI_START = "FETCH_SWAPI_START";
export const FETCH_SWAPI_SUCCESS = "FETCH_SWAPI_SUCCESS";
export const FETCH_SWAPI_FAILURE = "FETCH_SWAPI_FAILURE";

export const fetchSwapiPeople = () => dispatch => {
	dispatch({ type: FETCH_SWAPI_START });

	axios
		.get("https://swapi.co/api/people/")
		.then(res => {
			dispatch({ type: FETCH_SWAPI_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FETCH_SWAPI_FAILURE, payload: err.message });
		});
};
