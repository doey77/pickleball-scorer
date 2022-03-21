import { useState } from "react";
import { IGame } from "../interfaces/IGame";

type ScoreboardProps = {
    game: IGame
}

export default function Scoreboard(props: ScoreboardProps) {

    const game = props.game;

    const renderScore = () => {
        let serveLife = 1;
        if (game.lastServe)
            serveLife = 2;

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
          <p>{renderScore()}</p>
        </>
    )
}