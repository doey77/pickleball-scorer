import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
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

  return (
    <Box
      sx={{
        backgroundColor: teamA ? 'lightcoral' : 'lightskyblue',
        border: '1px solid black',
        fontSize: 'larger',
      }}
    >
      <br />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <p>{teamName + servingName}</p>
        <p>{score}</p>
        <ScoreButton score={scoreFunc} teamA={teamA} teamName={teamName} />
      </Stack>
      <br />
    </Box>
  )
}
