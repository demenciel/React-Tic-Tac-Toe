export function aiTurn(game, updateMap, playerTurn, win) {
    let bestScore = -Infinity;
    let bestMove = null;

    if (win !== null)
        return ;
    let gameCopy = [...game];
    let emptySpaces = gameCopy.flat().filter(x => x === null).length;
    for (let i = 0; i < 3; i++ ) {
        for (let j = 0; j < 3; j++) {
            if (gameCopy[i][j] === null && playerTurn % 2 !== 0) {
                gameCopy[i][j] = 'o'; 
                let score = minimax(gameCopy, emptySpaces, false);
                gameCopy[i][j] = null; 
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = {i, j};
                }
            }
        }
    }
    if (bestMove !== null) {
        setTimeout(() => {
            updateMap('o', bestMove.i, bestMove.j);
        }, 1000);
        return ;
    }
}

export function evaluateBoard(gameCopy) {
    for (let i = 0; i < 3; i++) {
        if (gameCopy[i][0] === 'x' && gameCopy[i][1] === 'x' && gameCopy[i][2] === 'x')
            return 1;
        else if (gameCopy[i][0] === 'o' && gameCopy[i][1] === 'o' && gameCopy[i][2] === 'o')
            return -1;
    }
    for (let i = 0; i < 3; i++) {
        if (gameCopy[0][i] === 'x' && gameCopy[1][i] === 'x' && gameCopy[2][i] === 'x')
            return 1;
        else if (gameCopy[0][i] === 'o' && gameCopy[1][i] === 'o' && gameCopy[2][i] === 'o')
            return -1;
    }
    if (gameCopy[0][0] === 'x' && gameCopy[1][1] === 'x' && gameCopy[2][2] === 'x')
        return 1;
    else if (gameCopy[0][0] === 'o' && gameCopy[1][1] === 'o' && gameCopy[2][2] === 'o')
        return -1;
    if (gameCopy[0][2] === 'x' && gameCopy[1][1] === 'x' && gameCopy[2][0] === 'x')
        return 1;
    else if (gameCopy[0][2] === 'o' && gameCopy[1][1] === 'o' && gameCopy[2][0] === 'o')
        return -1;
    return null;
};


function minimax(game, depth, isMaximizingPlayer) {
    const winner = evaluateBoard(game);
    if (winner !== null) {
        return winner;
    }
    if (depth === 0) {
        return 0;
    }
  
    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (game[i][j] === null) {
                    game[i][j] = 'o';
                    let score = minimax(game, depth - 1, false);
                    game[i][j] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } 
    else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (game[i][j] === null) {
                    game[i][j] = 'x';
                    let score = minimax(game, depth - 1, true);
                    game[i][j] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}


// export function aiTurn(game, updateMap, playerTurn, win) {
//     if (win !== null)
//         return ;
//     let gameCopy = [...game];
//     for (let i = 0; i < 3; i++ ) {
//         for (let j = 0; j < 3; j++) {
//             if (gameCopy[i][j] === null && playerTurn % 2 !== 0) {
//                 setTimeout(() => {
//                     updateMap('o', i, j);
//                 }, 1000);
//                 return ;
//             }
//         }
//     }
// }