import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {fetchTeam} from '../store/actions';
import Loader from "react-loader-spinner";
import TeamDetails from './TeamDetails';

const Team = (props) => {

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
            {props.team && <TeamDetails team={props.team}/>}
            <button onClick={props.fetchTeam}>New Team</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //state.team is because we're handling this like there are multiple reducers
        team: state.team.team,
        isFetching: state.team.isFetching,
        error: state.team.error
    }
}

export default connect(mapStateToProps, {fetchTeam})(Team)