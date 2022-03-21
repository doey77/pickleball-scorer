import { IGame } from "../interfaces/IGame";

type ScoreboardProps = {
    game: IGame
}

export default function Scoreboard(props: ScoreboardProps) {
    return (
        <>
        <p>{props.game.scoreA}</p>
        </>
    )
}