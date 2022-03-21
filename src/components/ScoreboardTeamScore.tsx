type ScoreboardTeamScoreProps = {
    score: number,
    teamName: string,
}

export default function ScoreboardTeamScore(props:ScoreboardTeamScoreProps) {

    return (
        <>
        <p>{props.teamName}: {props.score}</p>
        </>
    )
}