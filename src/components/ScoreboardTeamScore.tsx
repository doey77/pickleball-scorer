import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ScoreButton from './ScoreButton'
import { useViewport } from '../context/viewport'

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

  const { width } = useViewport()

  let servingName = ''
  if (serving) {
    servingName = ` - Serve ${serveLife.toString()}`
  }

  const fontWidth = width / 40
  let fontSize = 14

  if (fontWidth > 14) {
    fontSize = fontWidth
  }

  return (
    <Box
      sx={{
        backgroundColor: teamA ? 'lightcoral' : 'lightskyblue',
        border: '1px solid black',
      }}
    >
      <br />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1 + width / 150}
      >
        <Typography style={{ fontSize: `${fontSize}pt` }}>
          {teamName + servingName}
        </Typography>
        <Typography style={{ fontSize: `${fontSize}pt` }}>{score}</Typography>
        <ScoreButton
          score={scoreFunc}
          teamA={teamA}
          teamName={teamName}
          fontSize={fontSize}
        />
      </Stack>
      <br />
    </Box>
  )
}
