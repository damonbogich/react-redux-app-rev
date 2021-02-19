import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchTeam} from '../store/actions';
import Loader from "react-loader-spinner";

const Team = (props) => {
    console.log(props, 'props');
    useEffect(() => {
        props.fetchTeam();
    }, []);

    console.log(props, 'props')
    return (
        <div>
            <h1>NBA API Challenge</h1>
            {props.isFetching &&
             <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000}
              />}
            {props.team && (
            <h2>{props.team.full_name}</h2>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state, 'state')
    return {
        //state.team is because we're handling this like there are multiple reducers
        team: state.team.team,
        isFetching: state.team.isFetching,
        error: state.team.error
    }
}

export default connect(mapStateToProps, {fetchTeam})(Team)