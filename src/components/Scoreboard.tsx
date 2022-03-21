import { IGame } from "../interfaces/IGame";
import ScoreboardTeamScore from "./ScoreboardTeamScore";

type ScoreboardProps = {
    game: IGame,
    scoreFunc: (AScored:boolean)=>void
}

export default function Scoreboard(props: ScoreboardProps) {

    const game = props.game;

    let serveLife = 1;
    if (game.lastServe)
        serveLife = 2;

    return (
        <>
          <ScoreboardTeamScore
            score={game.scoreA}
            teamA={true}
            teamName={"Team A"}
            serving={game.servingA}
            serveLife={serveLife}
            scoreFunc={props.scoreFunc}/>
          <ScoreboardTeamScore
            score={game.scoreB}
            teamA={false}
            teamName={"Team B"}
            serving={!game.servingA}
            serveLife={serveLife}
            scoreFunc={props.scoreFunc}/>
        </>
    )
}