import { useState } from "react";
import "./css/ScoreButton.css"

type ScoreButtonProps = {
    score: (AScored:boolean)=>void,
    teamA: boolean,
}

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));


export default function ScoreButton(props: ScoreButtonProps) {

    const [disabledBtn, setDisabledBtn] = useState(false);

    let teamName = '';

    if (props.teamA) {
        teamName = 'Team A';
    } else {
        teamName = 'Team B';
    }

    const score = () => {
        setDisabledBtn(true);
        props.score(props.teamA);
        delay(1000).then(() => setDisabledBtn(false));
    }

    return (
        <>
            <button disabled={disabledBtn} className="score-btn" onClick={() => score()}>{teamName} scored</button>
        </>
    )
}