import { IGame } from '../interfaces/IGame'
import ScoreboardTeamScore from './ScoreboardTeamScore'

type ScoreboardProps = {
  game: IGame
  scoreFunc: (AScored: boolean) => void
}

export default function Scoreboard(props: ScoreboardProps) {
  const { game, scoreFunc } = props
  const { scoreA, scoreB, servingA } = game

  let serveLife = 1
  if (game.lastServe) serveLife = 2

  let score = ''
  if (servingA) {
    score = `${scoreA} - ${scoreB} - ${serveLife}`
  } else {
    score = `${scoreB} - ${scoreA} - ${serveLife}`
  }

  return (
    <>
      <ScoreboardTeamScore
        score={game.scoreA}
        teamA
        teamName="Team A"
        serving={game.servingA}
        serveLife={serveLife}
        scoreFunc={scoreFunc}
      />
      <ScoreboardTeamScore
        score={game.scoreB}
        teamA={false}
        teamName="Team B"
        serving={!game.servingA}
        serveLife={serveLife}
        scoreFunc={scoreFunc}
      />
      <br />
      <h3>{score}</h3>
    </>
  )
}
