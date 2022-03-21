type ScoreButtonProps = {
    score: (AScored:boolean)=>void,
    teamA: boolean,
}

export default function ScoreButton(props: ScoreButtonProps) {

    let teamName = '';

    if (props.teamA) {
        teamName = 'Team A';
    } else {
        teamName = 'Team B';
    }

    return (
        <>
            <button onClick={() => props.score(props.teamA)}>{teamName} scored</button>
        </>
    )
}