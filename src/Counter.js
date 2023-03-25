import React from 'react';
import Score from './Score.js';

const Counter = (props) => {
  return(
    <div className="counter">
      <button className="counter-action increment" onClick={()=> props.increment()}> + </button>
      <Score score={props.score} />
      <button className = "counter-action decrement"> - </button>
    </div>
  );
};

export default Counter;
