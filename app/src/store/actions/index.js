import axios from 'axios';

export const FETCH_TEAM_START = 'FETCH_TEAM_START';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE';

export const fetchTeam = () => {
    let id = Math.floor(Math.random() * (30 - 1) + 1);
    return (dispatch) => {
        dispatch({type: FETCH_TEAM_START});
        axios 
            .get(`https://www.balldontlie.io/api/v1/teams/${id}`)
            .then((res) => {
                console.log(res, 'response you want')
                dispatch({type: FETCH_TEAM_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }
}