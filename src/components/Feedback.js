import React from 'react';
import './Feedback.css';

const Feedback = ({feedback}) =>  (
  <div className="feedback">
    <h2 className="text-center feedback__value">{feedback}</h2>
  </div>
);

export default Feedback;