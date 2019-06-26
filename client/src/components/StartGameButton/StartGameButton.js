import React from 'react';

export default (props) => {
    // console.log(props.startGame);
    return (
        <button onClick={props.startGame}>Start Game</button>
    )
}