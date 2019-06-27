import React from 'react';

export default (props) => {
  console.log(props)

  const socketIds = Object.keys(props.leaderboard);
  const elements = socketIds.map( (socketId) => {

    const wpm = props.leaderboard[socketId].wpm ? (<li> WPM: {props.leaderboard[socketId].wpm} </li>) : ''

    return (
      <ul>
          <li> User: {props.leaderboard[socketId].socketId} </li>
          <li> Room: {props.leaderboard[socketId].roomId} </li>
          <li> Completion: {props.leaderboard[socketId].completion.progress} </li>
          {wpm}
      </ul>
    )
  });

  return (
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote">
        <h1 className="DisplayQuote-h1">Congrats mffferr</h1>
        {elements}
      </div>
    </div>
  )
}

