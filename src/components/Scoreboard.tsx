import Grid from '@mui/material/Grid'
import { useViewport } from '../context/viewport'
import { IGame } from '../interfaces/IGame'
import ScoreboardTeamScore from './ScoreboardTeamScore'

type ScoreboardProps = {
  game: IGame
  scoreFunc: (AScored: boolean) => void
}

export default function Scoreboard(props: ScoreboardProps) {
  const { game, scoreFunc } = props
  const { scoreA, scoreB, servingA } = game

  const { width } = useViewport()

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
      <h3>{score}</h3>
      <Grid container columns={width > 900 ? 2 : 1}>
        <Grid item xs={1}>
          <ScoreboardTeamScore
            score={game.scoreA}
            teamA
            teamName="Team A"
            serving={game.servingA}
            serveLife={serveLife}
            scoreFunc={scoreFunc}
          />
        </Grid>
        <Grid item xs={1}>
          <ScoreboardTeamScore
            score={game.scoreB}
            teamA={false}
            teamName="Team B"
            serving={!game.servingA}
            serveLife={serveLife}
            scoreFunc={scoreFunc}
          />
        </Grid>
      </Grid>
    </>
  )
}
