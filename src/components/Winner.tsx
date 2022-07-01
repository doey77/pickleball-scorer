type WinnerProps = {
  winner: string
}

export default function Winner(props: WinnerProps) {
  const { winner } = props

  return <p>{winner} wins!</p>
}
