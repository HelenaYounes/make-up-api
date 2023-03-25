import React from 'react';
import Counter from './Counter.js';

const Player = (props) =>{
  return(
    <div className="player">
      <span className="player-name"> {props.name}</span>
      <button className="remove-player"
      <Counter score= {props.score} increment={props.increment}/>
    </div>
  );
};

export default Player;
