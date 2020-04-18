import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FAILURE,
    ADDING_SMURF_START,
    ADDING_SMURF_SUCCESS
} from '../actions';

export const initialState = {
    stuff: [],
    fetchingSmurfs: false,
    addingSmurfs: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    console.log("Reducer test", state);
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingSmurfs: true,
                error: ""
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                stuff: action.payload,
                error: ""
            };
        case FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            };
        case ADDING_SMURF_START:
            return {
                ...state,
                addingSmurfs: true,
                error: ""
            };
        case ADDING_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurfs: false,
                stuff: action.payload,
                error: ""
            };
        default:
            return state;
    }
};