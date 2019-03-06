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
		default:
			return state;
	}
};
