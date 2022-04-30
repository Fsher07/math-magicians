// react component for the calculator interface
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorUI = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const processOnClick = (event) => {
    const { total: newTotal, next: newNext, operation: newOperation } = calculate(
      { total, next, operation },
      event.target.value,
    );
    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };
  return (
    <>
      <div className="calculator-page">
        <div className="calculator-page-intro">
          <h3 className="calculator-title">Let&apos;s do some math!</h3>
          <p>
            You can calculate the time it takes to achieve your dreams
            using the calculator on the left.
          </p>
        </div>
        <div className="calculator">
          <div className="calculator-display-value">
            {total}
            {operation}
            {next}
          </div>
          <div className="calculator-keypad">
            <div className="calculator-keypad-digit-column">
              <button type="button" className="key AC" value="AC" onClick={processOnClick}>AC</button>
              <button type="button" className="key sign" value="+/-" onClick={processOnClick}>+/-</button>
              <button type="button" className="key percent" value="%" onClick={processOnClick}>%</button>
              <button type="button" className="key digit" value="7" onClick={processOnClick}>7</button>
              <button type="button" className="key digit" value="8" onClick={processOnClick}>8</button>
              <button type="button" className="key digit" value="9" onClick={processOnClick}>9</button>
              <button type="button" className="key digit" value="4" onClick={processOnClick}>4</button>
              <button type="button" className="key digit" value="5" onClick={processOnClick}>5</button>
              <button type="button" className="key digit" value="6" onClick={processOnClick}>6</button>
              <button type="button" className="key digit" value="1" onClick={processOnClick}>1</button>
              <button type="button" className="key digit" value="2" onClick={processOnClick}>2</button>
              <button type="button" className="key digit" value="3" onClick={processOnClick}>3</button>
              <button type="button" className="key zero" value="0" onClick={processOnClick}>0</button>
              <button type="button" className="key decimal" value="." onClick={processOnClick}>.</button>
            </div>
            <div className="calculator-keypad-function-column">
              <button type="button" className="key divide bg-orange" value="÷" onClick={processOnClick}>÷</button>
              <button type="button" className="key multiply bg-orange" value="x" onClick={processOnClick}>×</button>
              <button type="button" className="key subtract bg-orange" value="-" onClick={processOnClick}>-</button>
              <button type="button" className="key add bg-orange" value="+" onClick={processOnClick}>+</button>
              <button type="button" className="key equal bg-orange" value="=" onClick={processOnClick}>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorUI;
