import Button from '@mui/material/Button'
import './css/ScoreButton.css'

type ScoreButtonProps = {
  score: (AScored: boolean) => void
  teamA: boolean
  teamName: string
}

export default function ScoreButton(props: ScoreButtonProps) {
  const { score, teamA, teamName } = props

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
