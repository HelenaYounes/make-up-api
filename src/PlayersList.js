import React from 'react';
import Player from './Player.js';

const PlayersList = (props) => {
  return (props.list.map((player)=>{
    return <Player name={player.name} score= {player.score} key={player.id} increment={props.increment}/>
  }))
};

export default PlayersList;
