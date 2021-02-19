import {FETCH_TEAM_FAILURE, FETCH_TEAM_START, FETCH_TEAM_SUCCESS} from '../actions';


const initialState = {
    team: {},
    isFetching: false,
    error: ""
};

export const teamReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_TEAM_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_TEAM_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                error: "",
                team: action.payload
            }
        default:
            return state
    }
}