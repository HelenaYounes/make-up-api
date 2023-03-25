import React from 'react';
import Counter from './Counter.js';
import Header from './Header.js';
import PlayersList from './PlayersList.js';
import Player from './Player.js';


const Scoreboard= (props) => {
  return(
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.totalPlayers} />
      <PlayersList increment={props.incrementScore} list={props.listPlayers}/>
    </div>
  );
}

export default Scoreboard;
