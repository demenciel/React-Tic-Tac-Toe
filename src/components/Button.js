import React from "react";

const Button = (props) => {
    return (
        <button className={`buttonGame ${props.buttonState ? 'buttonGameActive' : ''}`} onClick={props.onClick}>New Game</button>
    );
};

export default Button;