import React, { useState, useEffect } from 'react';

const Cell = (props) => {
    const [active, setActive] = useState(false);
    const [circle, setCircle] = useState(false);
    const [cross, setCross] = useState(false);

    useEffect(() => {
        if (props.game[props.row][props.cell] === 'x') {
            setCircle(false);
            setCross(true);
        } else if (props.game[props.row][props.cell] === 'o') {
            setCircle(true);
            setCross(false);
        } else {
            setCircle(false);
            setCross(false);
        }
    }, [props.button]);
    
    function updateMap(sign) {
        let gameCopy = [...props.game];
        gameCopy[props.row][props.cell] = sign;
        props.setGame(gameCopy);
        props.checkForWin(gameCopy);
    }

    const handleClick = () => {
        if (props.game[props.row][props.cell] !== null || props.win !== null) {
            return ;
        }
        setActive(!active);
        setTimeout(() => {
            setActive(active => !active);
        }, 300);
        if (props.playerTurn % 2 === 0)
        {
            updateMap('x');
            setCircle(false);
            setCross(true);
        }
        else
        {
            updateMap('o');
            setCircle(true);
            setCross(false);
        };
    };

    return (
        <div className={`container ${active ? 'active' : ''}`} style={props.style} onClick={handleClick}>
            <div className='cell'>
            <div className={`${circle ? 'circle' : cross ? 'cross' : ''}`}></div>
            </div>
        </div>
    );
};

export default Cell;