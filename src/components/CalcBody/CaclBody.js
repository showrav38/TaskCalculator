import React, { useEffect, useState } from 'react';
import CalcScreen from '../CalcScreen/CalcScreen';
import './CalcBody.css';

const CaclBody = () => {
  const [preState, setPreState] = useState('');
  const [curState, setCurState] = useState('');
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  //   for taking the input in screen
  const inputNum = e => {
    if (total) {
      setPreState('');
    }
    if (curState === '0') {
      setCurState('');
    }
    curState ? setCurState(pre => pre + e.target.innerText) : setCurState(e.target.innerText);
    setTotal(false);
  };

  //if time curState change will update the input as curState
  useEffect(() => {
    setInput(curState);
  }, [curState]);

  //for the first time when app loads
  useEffect(() => {
    setInput('0');
  }, []);
  
  const operatorType = e => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === '') return;
    if (preState !== '') {
      equals();
    } else {
      setPreState(curState);
      setCurState('');
    }
  };

  const equals = e => {
    if (e?.target.innerText === '=') {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case '/':
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case '+':
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case 'X':
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case '-':
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput('');
    setPreState(cal);
    setCurState('');
  };
  const reset = () => {
    setPreState('');
    setCurState('0');
    setInput('0');
  };

  return (
    <div>
      <div style={{ marginTop: '20px' }} className="container">
        <div className="wrapper">
          <CalcScreen input={input} preState={preState} />

          <div className="btn equal light-gray" onClick={reset}>
            AC
          </div>

          <div className="btn orange" onClick={operatorType}>
            /
          </div>
          <div className="btn orange" onClick={operatorType}>
            X
          </div>
          <div className="btn" onClick={inputNum}>
            7
          </div>
          <div className="btn" onClick={inputNum}>
            8
          </div>
          <div className="btn" onClick={inputNum}>
            9
          </div>
          <div className="btn orange" onClick={operatorType}>
            -
          </div>
          <div className="btn" onClick={inputNum}>
            4
          </div>
          <div className="btn" onClick={inputNum}>
            5
          </div>
          <div className="btn" onClick={inputNum}>
            6
          </div>
          <div className="btn col2 orange" onClick={operatorType}>
            +
          </div>

          <div className="btn" onClick={inputNum}>
            1
          </div>
          <div className="btn" onClick={inputNum}>
            2
          </div>
          <div className="btn" onClick={inputNum}>
            3
          </div>

          <div className="btn zero" onClick={inputNum}>
            0
          </div>
          <div className="btn equal" onClick={equals}>
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaclBody;
