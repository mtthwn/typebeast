import React from 'react';

export default (props) => {
  console.log(props)

  const socketIds = Object.keys(props.leaderboard);
  const elements = socketIds.map( (socketId) => {

    const wpm = props.leaderboard[socketId].wpm ? (<li> WPM: {props.leaderboard[socketId].wpm} </li>) : ''

    console.log(props.leaderboard);
    return (
      <ul>
          <li> User: {props.leaderboard[socketId].username} </li>
          <li> Completion: {`${Math.floor(props.leaderboard[socketId].completion.progress * 100)}%`} </li>
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

