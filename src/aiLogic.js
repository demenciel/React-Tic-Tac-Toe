export function aiTurn(game, updateMap, playerTurn, win) {
    if (win !== null)
        return ;
    let gameCopy = [...game];
    for (let i = 0; i < 3; i++ ) {
        for (let j = 0; j < 3; j++) {
            if (gameCopy[i][j] === null && playerTurn % 2 !== 0) {
                setTimeout(() => {
                    updateMap('o', i, j);
                }, 1000);
                return ;
            }
        }
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