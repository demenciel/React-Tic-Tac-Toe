import '../style/App.css';
import Row from './Row'
import Button from './Button';
import Win from './Win';
import React, { useState, useEffect } from 'react';
import PlayerScores from './PlayerScores';
import { aiTurn } from '../aiLogic';
import { checkForWin } from '../checkStateGame';

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

    // at each change on playerTurn, aiTurn function start
    useEffect(()=> {
        aiTurn(game, updateMap, playerTurn, win);
    }, [playerTurn]);

    /**
     * @brief Updates the state of the map
     * @param {*} sign the sign to be put on the map 
     * @param {*} i i position
     * @param {*} j j position
     */
    function updateMap(sign, i, j) {
        let gameCopy = [...game];
        gameCopy[i][j] = sign;
        setGame(gameCopy);
        checkForWin(gameCopy, setWin);
        setPlayerTurn(playerTurn + 1);
    }
    
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


    return (
        <div className='view'>
            <h1 className='appHeader'>TIC TAC TOE</h1>
            <Win
                win={win}
            />
            <div className='board'>
                <div className='rows'>
                    <Row 
                        row={0} 
                        game={game} 
                        setGame={setGame}
                        checkForWin={checkForWin}
                        win={win}
                        playerTurn={playerTurn} 
                        updateMap={updateMap}
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
                        updateMap={updateMap}
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
                        updateMap={updateMap}
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