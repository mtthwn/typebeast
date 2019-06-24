import React from 'react';
import socketIOClient from "socket.io-client";

const TypingSpeed = ({ second, char, socket }) => {
  const wpm = char / 5 / (second / 60);
  if (socket) {
    socket.emit('progress-update', wpm)
  }
  return (
    <div className="TypingSpeed-wpm">
      <div className="TypingSpeed-num">
        {second !== 0 && char !== 0 ? Math.round(wpm) : 0}
      </div>
      <div className="TypingSpeed-num-sm">wpm</div>
    </div>
  );
};
export default TypingSpeed;
