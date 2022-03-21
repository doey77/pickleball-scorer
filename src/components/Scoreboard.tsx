import { IGame } from "../interfaces/IGame";
import ScoreboardTeamScore from "./ScoreboardTeamScore";

type ScoreboardProps = {
    game: IGame
}

export default function Scoreboard(props: ScoreboardProps) {

    const game = props.game;

    let serveLife = 1;
    if (game.lastServe)
        serveLife = 2;

    const renderScore = () => {
        if (game.servingA) 
            return `${game.scoreA} - ${game.scoreB} - ${serveLife}`;
        return `${game.scoreB} - ${game.scoreA} - ${serveLife}`;
    };

    const whosServing = () => {
        if (game.servingA)
          return 'Team A is serving';
        return 'Team B is serving';
      }

    return (
        <>
          <p>{whosServing()}</p>
          <ScoreboardTeamScore score={game.scoreA} teamName={"Team A"} />
          <ScoreboardTeamScore score={game.scoreB} teamName={"Team B"} />
          <p>Serve: {serveLife}</p>
        </>
    )
}