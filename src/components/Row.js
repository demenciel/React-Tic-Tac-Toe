import React from 'react';
import Cell from './Cell'

const Row = (props) => {
    return (
        <div style={props.style} className='row'>
            <Cell 
                cell={0}
                aiTurn={props.aiTurn}
                row={props.row} 
                game={props.game} 
                setGame={props.setGame} 
                checkForWin={props.checkForWin}
                win={props.win}
                updateMap={props.updateMap}
                playerTurn={props.playerTurn}
                reset={props.reset}
                button={props.button}
                style={{borderRight: "1px solid rgba(255, 255, 255, 0.3)"}}
                />
            <Cell 
                cell={1} 
                aiTurn={props.aiTurn}
                row={props.row} 
                game={props.game} 
                setGame={props.setGame} 
                checkForWin={props.checkForWin}
                win={props.win}
                updateMap={props.updateMap}
                playerTurn={props.playerTurn}
                reset={props.reset}
                button={props.button}
                style={{borderRight: "1px solid rgba(255, 255, 255, 0.3)"}}
                />
            <Cell
                cell={2} 
                aiTurn={props.aiTurn}
                row={props.row} 
                game={props.game} 
                setGame={props.setGame}
                checkForWin={props.checkForWin}
                win={props.win}
                updateMap={props.updateMap}
                playerTurn={props.playerTurn}
                reset={props.reset}
                button={props.button}
            />
        </div>
    );
}

export default Row;
