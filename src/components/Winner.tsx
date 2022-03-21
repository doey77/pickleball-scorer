type WinnerProps = {
    winner: string
}

export default function Winner(props: WinnerProps) {
    
    return (
        <p>{props.winner} wins!</p>
    )
}