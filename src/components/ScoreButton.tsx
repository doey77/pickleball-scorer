import Button from '@mui/material/Button'

type ScoreButtonProps = {
  score: (AScored: boolean) => void
  teamA: boolean
  fontSize: number
  teamName: string
}

export default function ScoreButton(props: ScoreButtonProps) {
  const { score, teamA, fontSize, teamName } = props

  const onScore = () => {
    score(teamA)
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      type="button"
      style={{ fontSize: `${fontSize - 2}pt` }}
      onClick={() => onScore()}
    >
      {teamName} rally win
    </Button>
  )
}
