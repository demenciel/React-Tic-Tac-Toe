import '../style/App.css';
import Row from './Row'
import Button from './Button';
import React, { useState } from 'react';

const Board = () => {
    var [playerTurn, setPlayerTurn] = useState(0);
    var [button, setButton] = useState(false);
    var [game, setGame] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);
    const updateGame = () => {
        setPlayerTurn(playerTurn + 1);
        setGame(game);
        console.log(playerTurn);
    };
    function refreshPage() {
        window.location.reload(false);
        setButton(button);
    }

    return (
        <div className='board'>
            <div className='rows' onClick={updateGame}>
                <Row game={game} row={0} playerTurn={playerTurn} updateGame={updateGame} style={{borderBottom: "1px solid rgba(255, 255, 255, 0.3)"}}/>
                <Row game={game} row={1} playerTurn={playerTurn} updateGame={updateGame} style={{borderBottom: "1px solid rgba(255, 255, 255, 0.3)"}}/>
                <Row game={game} row={2} playerTurn={playerTurn} updateGame={updateGame}/>
            </div>
            <div className='boardButton'>
                <Button buttonState={button} onClick={refreshPage} />
            </div>
        </div>
    )
}

export default Board;