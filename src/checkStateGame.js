export function checkForWin(gameCopy, setWin) {
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
    if (gameCopy[0][0] === 'x' && gameCopy[1][1] === 'x' && gameCopy[2][2] === 'x')
        setWin(1);
    else if (gameCopy[0][0] === 'o' && gameCopy[1][1] === 'o' && gameCopy[2][2] === 'o')
        setWin(0);
    if (gameCopy[0][2] === 'x' && gameCopy[1][1] === 'x' && gameCopy[2][0] === 'x')
        setWin(1);
    else if (gameCopy[0][2] === 'o' && gameCopy[1][1] === 'o' && gameCopy[2][0] === 'o')
        setWin(0);
};