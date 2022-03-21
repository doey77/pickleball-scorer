import "./css/ScoreboardTeamScore.css"
import ScoreButton from "./ScoreButton";

type ScoreboardTeamScoreProps = {
    score: number,
    teamName: string,
    serving: boolean,
    serveLife: number,
    teamA: boolean,
    scoreFunc: (AScored:boolean)=>void
}

export default function ScoreboardTeamScore(props:ScoreboardTeamScoreProps) {

    let serving = '';
    if (props.serving) {
        serving = ' - Serve ' + props.serveLife.toString();
    }

    let teamColor = "a-color";
    if (!props.teamA) teamColor = "b-color";

    return (
        <div className={"score-box " + teamColor}>
        <p>{props.teamName + serving}</p>
        <p>{props.score}</p>
        <ScoreButton score={props.scoreFunc} teamA={props.teamA} />
        <br /> <br />
        </div>
    )
}