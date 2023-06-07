import '../style/App.css';
import Row from './Row'
import Button from './Button';
import Win from './Win';
import React, { useState, useEffect } from 'react';
import PlayerScores from './PlayerScores';

const Board = () => {
    var [playerTurn, setPlayerTurn] = useState(0);
    var [button, setButton] = useState(false);
    var [win, setWin] = useState(null);
    var [game, setGame] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);
    var [score1, setScore1] = useState(0);
    var [score2, setScore2] = useState(0);

    // when win, effect happens
    useEffect(() => { 
        if (win === 1) {
            setScore1(score1 + 1);
        } 
        else if (win === 0) {
            setScore2(score2 + 1);
        }
    }, [win]);

    const updateGame = () => {
        setPlayerTurn(playerTurn + 1);
    };
    
    const resetGame = () => {
        setGame([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]);
        setPlayerTurn(0);
        setWin(null);
    };

    const buttonClicked = () => {
        setButton(!button);
        resetGame();
    };

    function checkForWin(gameCopy) {
        // check for Wins rows
        for (let i = 0; i < 3; i++) {
            if (gameCopy[i][0] === 'x' && gameCopy[i][1] === 'x' && gameCopy[i][2] === 'x')
                setWin(1);
            else if (gameCopy[i][0] === 'o' && gameCopy[i][1] === 'o' && gameCopy[i][2] === 'o')
                setWin(0);
        }
        for (let i = 0; i < 3; i++) {
            if (gameCopy[0][i] === 'x' && gameCopy[1][i] === 'x' && gameCopy[2][i] === 'x')
                setWin(1);
            else if (gameCopy[0][i] === 'o' && gameCopy[1][i] === 'o' && gameCopy[2][i] === 'o')
                setWin(0);
        }
        // Check for wins diagonal
        if (gameCopy[0][0] === 'x' && gameCopy[1][1] === 'x' && gameCopy[2][2] === 'x')
            setWin(1);
        else if (gameCopy[0][0] === 'o' && gameCopy[1][1] === 'o' && gameCopy[2][2] === 'o')
            setWin(0);
        if (gameCopy[0][2] === 'x' && gameCopy[1][1] === 'x' && gameCopy[2][0] === 'x')
            setWin(1);
        else if (gameCopy[0][2] === 'o' && gameCopy[1][1] === 'o' && gameCopy[2][0] === 'o')
            setWin(0);
    };

    function checkForNull(gameCopy) {
        for (let i = 0; i < gameCopy[i].length; i++) {
              
        }
    };

    return (
        <div className='view'>
            <h1 className='appHeader'>TIC TAC TOE</h1>
            <Win
                win={win}
            />
            <div className='board'>
                <div className='rows' onClick={updateGame}>
                    <Row 
                        row={0} 
                        game={game} 
                        setGame={setGame}
                        checkForWin={checkForWin}
                        win={win}
                        playerTurn={playerTurn} 
                        updateGame={updateGame}
                        reset={resetGame}
                        button={button}
                        style={{borderBottom: "1px solid rgba(255, 255, 255, 0.3)"}}
                    />
                    <Row 
                        row={1} 
                        game={game} 
                        setGame={setGame}
                        checkForWin={checkForWin}
                        win={win}
                        playerTurn={playerTurn} 
                        updateGame={updateGame}
                        reset={resetGame}
                        button={button}
                        style={{borderBottom: "1px solid rgba(255, 255, 255, 0.3)"}}
                    />
                    <Row 
                        row={2}
                        game={game} 
                        setGame={setGame} 
                        checkForWin={checkForWin}
                        win={win}
                        playerTurn={playerTurn} 
                        updateGame={updateGame} 
                        reset={resetGame}
                        button={button}
                    />
                </div>
                <div className='boardButton'>
                    <Button onClick={buttonClicked} />
                </div>
            </div>
            <div className='scores'>
                <PlayerScores
                    player={'X'} 
                    win={win}
                    score={score1}
                />
                <PlayerScores 
                    player={'O'} 
                    win={win}
                    score={score2}
                />
            </div>  
        </div>
        
    )
}

export default Board;