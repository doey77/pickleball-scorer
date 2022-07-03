import Button from '@mui/material/Button'
import './css/ScoreButton.css'

type ScoreButtonProps = {
  score: (AScored: boolean) => void
  teamA: boolean
}

export default function ScoreButton(props: ScoreButtonProps) {
  const { score, teamA } = props

  let teamName = ''

  if (teamA) {
    teamName = 'Team A'
  } else {
    teamName = 'Team B'
  }

  const onScore = () => {
    score(teamA)
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      type="button"
      className="score-btn"
      onClick={() => onScore()}
    >
      {teamName} rally win
    </Button>
  )
}
