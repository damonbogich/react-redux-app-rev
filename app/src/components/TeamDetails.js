
export default function TeamDetails({team}) {
    console.log(team, 'teamdetails component props');
    return (
        <div>
            <h2>{team.full_name}</h2>
            <h3>Conference: {team.conference}</h3>
            <h3>Division: {team.division}</h3>
            <p>teamdetails</p>
        </div>
    )
}