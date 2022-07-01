import { useState } from 'react'
import './css/ScoreButton.css'

type ScoreButtonProps = {
  score: (AScored: boolean) => void
  teamA: boolean
}

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

export default function ScoreButton(props: ScoreButtonProps) {
  const { score, teamA } = props
  const [disabledBtn, setDisabledBtn] = useState(false)

  let teamName = ''

  if (teamA) {
    teamName = 'Team A'
  } else {
    teamName = 'Team B'
  }

  const onScore = () => {
    setDisabledBtn(true)
    score(teamA)
    delay(1000).then(() => setDisabledBtn(false))
  }

  return (
    <button
      type="button"
      disabled={disabledBtn}
      className="score-btn"
      onClick={() => onScore()}
    >
      {teamName} rally win
    </button>
  )
}
