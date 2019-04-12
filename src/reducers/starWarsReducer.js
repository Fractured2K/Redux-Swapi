import {
	FETCH_SWAPI_START,
	FETCH_SWAPI_SUCCESS,
	FETCH_SWAPI_FAILURE
} from "../actions";

const initialState = {
	characters: [],
	fetching: false,
	errors: null
};

export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SWAPI_START:
			return {
				...state,
				fetching: true,
				errors: null
			};
		case FETCH_SWAPI_SUCCESS:
			return {
				...state,
				characters: action.payload,
				fetching: false,
				errors: null
			};
		case FETCH_SWAPI_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			};
		default:
			return state;
	}
};
