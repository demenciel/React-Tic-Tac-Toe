import React, { useState } from 'react';

const Cell = (props) => {
    const [active, setActive] = useState(false);
    const [played, setPlayed] = useState(false);
    const [circle, setCircle] = useState(false);
    const [cross, setCross] = useState(false);
    

    const handleClick = () => {
        setActive(!active);
        setTimeout(() => {
            setActive(active => !active);
        }, 300);
        if (!played)
        {
            if (props.playerTurn % 2 === 0)
            {
                console.log('cross');
                setCircle(false);
                setCross(true);
            }
            else
            {
                console.log('circle');
                setCircle(true);
                setCross(false);
            };
        };
        setPlayed(played);
    };

    return (
        <div className={`cell ${active ? 'active' : ''}`} style={props.style} onClick={handleClick}>
            <div className={`${circle ? 'circle' : cross ? 'cross' : ''}`}>
            </div>
        </div>
    );
};

export default Cell;