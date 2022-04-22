// react component for the calculator interface
import React from 'react';

class CalculatorUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display-value">
          0
        </div>
        <div className="calculator-keypad">
          <div className="calculator-keypad-digit-column">
            <button type="button" className="key AC">AC</button>
            <button type="button" className="key sign">+/-</button>
            <button type="button" className="key percent">%</button>
            <button type="button" className="key digit">7</button>
            <button type="button" className="key digit">8</button>
            <button type="button" className="key digit">9</button>
            <button type="button" className="key digit">4</button>
            <button type="button" className="key digit">5</button>
            <button type="button" className="key digit">6</button>
            <button type="button" className="key digit">1</button>
            <button type="button" className="key digit">2</button>
            <button type="button" className="key digit">3</button>
            <button type="button" className="key zero">0</button>
            <button type="button" className="key decimal">.</button>
          </div>
          <div className="calculator-keypad-function-column">
            <button type="button" className="key divide bg-orange">÷</button>
            <button type="button" className="key multiply bg-orange">×</button>
            <button type="button" className="key subtract bg-orange">-</button>
            <button type="button" className="key add bg-orange">+</button>
            <button type="button" className="key equal bg-orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorUI;
