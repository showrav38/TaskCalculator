import React from 'react';
import CalcScreen from '../CalcScreen/CalcScreen';
import './CalcBody.css';
const CaclBody = () => {
  return (
    <div>
      <div style={{ marginTop: '20px' }} className="container">
        <div className="wrapper">
          <CalcScreen />

          <div className="btn equal light-gray">AC</div>

          <div className="btn orange">/</div>
          <div className="btn orange">X</div>
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
          <div className="btn orange">-</div>
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
          <div className="btn col2 orange">+</div>

          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>

          <div className="btn zero">0</div>
          <div className="btn equal">=</div>
        </div>
      </div>
    </div>
  );
};

export default CaclBody;
