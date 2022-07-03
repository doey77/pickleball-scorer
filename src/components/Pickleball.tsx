/* eslint-disable no-alert */
import { useState } from 'react'
import Cookies from 'js-cookie'
import Button from '@mui/material/Button'
import Scoreboard from './Scoreboard'
import { IGame } from '../interfaces/IGame'
import Winner from './Winner'
import initialGame from '../util/initialGame'
import { getGameCookie, setGameCookie } from '../helpers/gameCookie'

/**
 * Master pickleball component, holding state of the app
 */
export default function PickleBall() {
  const [gameHistory, setGameHistory] = useState<IGame[]>([getGameCookie()])

  const [aName, setAName] = useState('Team A')
  const [bName, setBName] = useState('Team B')

  const game = gameHistory[0]

  const [winner, setWinner] = useState('')

  const checkForWin = (gameUpdate: IGame) => {
    // Win at 11. Must win by 2
    if (gameUpdate.scoreA >= 11 && gameUpdate.scoreA - 1 > gameUpdate.scoreB) {
      setWinner(aName)
      setGameCookie(initialGame)
    } else if (
      gameUpdate.scoreB >= 11 &&
      gameUpdate.scoreB - 1 > gameUpdate.scoreA
    ) {
      setWinner(bName)
      setGameCookie(initialGame)
    }
  }

  const updateGame = (gameUpdate: IGame) => {
    // update game history
    const newGameHistory = [...gameHistory]
    newGameHistory.unshift(gameUpdate)
    setGameHistory(newGameHistory)

    // update game cookie
    Cookies.set('game', JSON.stringify(gameUpdate))
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
    updateGame(gameUpdate)
    checkForWin(gameUpdate)
  }

  const resetGame = (confirmDialog: boolean) => {
    let confirmed = false
    if (confirmDialog) {
      if (window.confirm('Are you sure you want to reset?')) {
        confirmed = true
      }
    } else {
      confirmed = true
    }

    if (confirmed) {
      setGameHistory([{ ...initialGame }])
      setWinner('')
    }
  }

  const isUndoDisabled = gameHistory.length < 2

  const undo = () => {
    const newGameHistory = [...gameHistory]
    newGameHistory.shift()
    setGameHistory(newGameHistory)
  }

  const handleEditTeamNames = () => {
    const teamA = window.prompt('Enter name for Team A')
    const teamB = window.prompt('Enter name for Team B')

    setAName(teamA ?? 'Team A')
    setBName(teamB ?? 'Team B')
  }

  if (winner) {
    return (
      <>
        <Winner winner={winner} />
        <Button
          variant="contained"
          type="button"
          onClick={() => resetGame(false)}
        >
          New Game
        </Button>
      </>
    )
  }

  return (
    <>
      <h1>Pickleball!</h1>
      <Scoreboard game={game} scoreFunc={score} aName={aName} bName={bName} />
      <br />
      <Button
        variant="contained"
        type="button"
        disabled={isUndoDisabled}
        onClick={undo}
      >
        Undo
      </Button>
      <br /> <br />
      <Button
        variant="contained"
        color="info"
        type="button"
        onClick={handleEditTeamNames}
      >
        Edit Team Names
      </Button>
      <br /> <br />
      <Button
        variant="contained"
        color="error"
        type="button"
        onClick={() => resetGame(true)}
      >
        Reset Game
      </Button>
      <br /> <br />
    </>
  )
}
