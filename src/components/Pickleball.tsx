import { useState } from 'react'
import Scoreboard from './Scoreboard'
import { IGame } from '../interfaces/IGame'
import Winner from './Winner'
import initialGame from '../util/initialGame'

/**
 * Master pickleball component, holding state of the app
 */
export default function PickleBall() {
  const [game, setGame] = useState<IGame>(initialGame)

  const [winner, setWinner] = useState('')

  const checkForWin = (gameUpdate: IGame) => {
    // Win at 11. Must win by 2
    if (gameUpdate.scoreA >= 11 && gameUpdate.scoreA - 1 > gameUpdate.scoreB) {
      setWinner('Team A')
    } else if (
      gameUpdate.scoreB >= 11 &&
      gameUpdate.scoreB - 1 > gameUpdate.scoreA
    ) {
      setWinner('Team B')
    }
  }

  /**
   * @param AScored If team A scored
   */
  const score = (AScored: boolean) => {
    const gameUpdate = { ...game }
    if (AScored) {
      // A scored
      if (game.servingA) {
        // A gets a point
        gameUpdate.scoreA++
      } else {
        // serving goes to 2, or A gets ball
        if (game.lastServe) {
          gameUpdate.servingA = true
          gameUpdate.lastServe = false
        } else {
          gameUpdate.lastServe = true
        }
      }
    } else {
      // B scored
      if (!game.servingA) {
        // B gets a point
        gameUpdate.scoreB++
      } else {
        // serving goes to 2, or B gets ball
        if (game.lastServe) {
          gameUpdate.servingA = false
          gameUpdate.lastServe = false
        } else {
          gameUpdate.lastServe = true
        }
      }
    }
    setGame(gameUpdate)
    checkForWin(gameUpdate)
  }

  const resetGame = (confirmDialog: boolean) => {
    let confirmed = false
    if (confirmDialog) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to reset?')) {
        confirmed = true
      }
    } else {
      confirmed = true
    }

    if (confirmed) {
      setGame({ ...initialGame })
      setWinner('')
    }
  }

  if (winner) {
    return (
      <>
        <Winner winner={winner} />
        <button type="button" onClick={() => resetGame(false)}>
          Reset Game
        </button>
      </>
    )
  }

  return (
    <>
      <h1>Pickleball!</h1>
      <Scoreboard game={game} scoreFunc={score} />
      <br /> <br /> <br />
      <button type="button" onClick={() => resetGame(true)}>
        Reset Game
      </button>
    </>
  )
}
