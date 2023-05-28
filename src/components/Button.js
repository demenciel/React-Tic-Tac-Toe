import React from "react";

const Button = (props) => {
    return (
        <button className="buttonGame" onClick={props.onClick}>New Game</button>
    );
};

export default Button;