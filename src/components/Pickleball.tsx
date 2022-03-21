import { useState } from 'react';
import Scoreboard from './Scoreboard';
import { IGame } from '../interfaces/IGame';

/**
 * Master pickleball component, holding state of the app
 */
export default function PickleBall() {
    const [game, setGame] = useState<IGame>({
        scoreA: 0,
        scoreB: 0,
        lastServe: true,
        servingA: true
      });
    
      const [winner, setWinner] = useState('');
    
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
      
      /**
       * @param AScored If team A scored
       */
      const score = (AScored: boolean) => {
        const gameUpdate = {...game};
        if (AScored) {
          // A scored
          if (game.servingA) {
            // A gets a point
            gameUpdate.scoreA++;
          } else {
            // serving goes to 2, or A gets ball
            if (game.lastServe) {
              gameUpdate.servingA = true;
              gameUpdate.lastServe = false;
            } else {
              gameUpdate.lastServe = true;
            }
          }
        } else {
          // B scored
          if (!game.servingA) {
            // B gets a point
            gameUpdate.scoreB++;
          } else {
            // serving goes to 2, or B gets ball
            if (game.lastServe) {
              gameUpdate.servingA = false;
              gameUpdate.lastServe = false;
            } else {
              gameUpdate.lastServe = true;
            }
          }
        }
        setGame(gameUpdate);
        checkForWin(gameUpdate);
      }
    
      const checkForWin = (gameUpdate: IGame) => {
        // Win at 11. Must win by 2
        if (gameUpdate.scoreA >= 11 && gameUpdate.scoreA - 1 > gameUpdate.scoreB) {
          setWinner('Team A');
        } else if (gameUpdate.scoreB >= 11 && gameUpdate.scoreB - 1 > gameUpdate.scoreA) {
          setWinner('Team B');
        }
      }
    
      let scoreboard = (
        <>
        <Scoreboard game={game} />
          <p>{whosServing()}</p>
          <p>{renderScore()}</p>
          <button onClick={() => score(true)}>Team A scored</button>
          <br /> <br />
          <button onClick={() => score(false)}>Team B scored</button>
        </>
      )
    
      if (winner) {
        scoreboard = <>
          <p>{winner} wins!</p>
        </>
      }
    
      return (
        <div className="App">
          {scoreboard}
        </div>
      );
}