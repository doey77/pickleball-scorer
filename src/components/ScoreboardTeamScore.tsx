import './css/ScoreboardTeamScore.css'
import ScoreButton from './ScoreButton'

type ScoreboardTeamScoreProps = {
  score: number
  teamName: string
  serving: boolean
  serveLife: number
  teamA: boolean
  scoreFunc: (AScored: boolean) => void
}

export default function ScoreboardTeamScore(props: ScoreboardTeamScoreProps) {
  const { score, scoreFunc, serveLife, serving, teamA, teamName } = props

  let servingName = ''
  if (serving) {
    servingName = ` - Serve ${serveLife.toString()}`
  }

  let teamColor = 'a-color'
  if (!teamA) teamColor = 'b-color'

  return (
    <div className={`score-box ${teamColor}`}>
      <p>{teamName + servingName}</p>
      <p>{score}</p>
      <ScoreButton score={scoreFunc} teamA={teamA} />
      <br /> <br />
    </div>
  )
}
