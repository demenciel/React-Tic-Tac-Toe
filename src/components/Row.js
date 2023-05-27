import React from 'react';
import Cell from './Cell'

const Row = (props) => {
    return (
        <div style={props.style} className='row'>
            <Cell cellNumber={0} updateGame={props.updateGame} playerTurn={props.playerTurn} style={{borderRight: "1px solid rgba(255, 255, 255, 0.3)"}}/>
            <Cell cellNumber={0} updateGame={props.updateGame} playerTurn={props.playerTurn} style={{borderRight: "1px solid rgba(255, 255, 255, 0.3)"}}/>
            <Cell cellNumber={0} updateGame={props.updateGame} playerTurn={props.playerTurn} />
        </div>
    );
}

export default Row;
