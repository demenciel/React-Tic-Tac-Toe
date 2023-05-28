import React from "react";

const PlayerScores = (props) => {
    return (
        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <h1 className="scoresHeader">{props.player}</h1>
            <h2 className="scoresCount">Scores : {props.score}</h2>
        </div>
    );
};

export default PlayerScores;
