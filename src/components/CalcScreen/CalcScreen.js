import React from 'react';
import './CalcScreen.css';
const CalcScreen = ({ input, preState }) => {
  return (
    <div className="screen">
      {input !== '' || input === '0' ? <h4>{input}</h4> : <h4>{preState}</h4>}
    </div>
  );
};

export default CalcScreen;
