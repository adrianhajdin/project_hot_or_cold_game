import React from 'react';
import './Progress.css';

const Progress = ({attempt, guessList}) => (
  <div className="progressBar">
    <h2 className="text-center progressBar__current">Guess #{attempt}</h2>
    <ul className="progressBar__history">
      {guessList}
    </ul>
  </div>
);

export default Progress;