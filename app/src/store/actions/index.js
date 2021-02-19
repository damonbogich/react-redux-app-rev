import axios from 'axios';

export const FETCH_TEAM_START = 'FETCH_TEAM_START';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE';

export const fetchTeam = () => {
    return (dispatch) => {
        dispatch({type: FETCH_TEAM_START});
        axios 
            .get("https://www.balldontlie.io/api/v1/teams/10")
            .then((res) => {
                console.log(res)
                dispatch({type: FETCH_TEAM_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }
}