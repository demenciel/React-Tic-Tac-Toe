import React ,{useState, useEffect} from "react";

const Win = (props) => {
    var [player, setPlayer] = useState(null);
    var [show, setShow] = useState(false);

    useEffect(() => { 
        if (props.win === 1) {
            setPlayer('X');
        } 
        else if (props.win === 0) {
            setPlayer('O');
        }
        setShow(!show);
    }, [props.win]);
    return (
        <div className={`winMessage ${show ? 'show' : ''}`}>
            <h1 className="winHeader">{player} Has Won !</h1>
            <h2>Click on New Game to start a new game</h2>
        </div>
    );
};

export default Win;