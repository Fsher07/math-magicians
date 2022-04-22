// react component for the calculator interface
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class CalculatorUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  processOnClick = (event) => {
    const {
      total, next, operation,
    } = calculate(
      this.state,
      event.target.value,
    );
    this.setState({
      total,
      next,
      operation,
    });
  };

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-display-value">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-keypad">
          <div className="calculator-keypad-digit-column">
            <button type="button" className="key AC" value="AC" onClick={this.processOnClick}>AC</button>
            <button type="button" className="key sign" value="+/-" onClick={this.processOnClick}>+/-</button>
            <button type="button" className="key percent" value="%" onClick={this.processOnClick}>%</button>
            <button type="button" className="key digit" value="7" onClick={this.processOnClick}>7</button>
            <button type="button" className="key digit" value="8" onClick={this.processOnClick}>8</button>
            <button type="button" className="key digit" value="9" onClick={this.processOnClick}>9</button>
            <button type="button" className="key digit" value="4" onClick={this.processOnClick}>4</button>
            <button type="button" className="key digit" value="5" onClick={this.processOnClick}>5</button>
            <button type="button" className="key digit" value="6" onClick={this.processOnClick}>6</button>
            <button type="button" className="key digit" value="1" onClick={this.processOnClick}>1</button>
            <button type="button" className="key digit" value="2" onClick={this.processOnClick}>2</button>
            <button type="button" className="key digit" value="3" onClick={this.processOnClick}>3</button>
            <button type="button" className="key zero" value="0" onClick={this.processOnClick}>0</button>
            <button type="button" className="key decimal" value="." onClick={this.processOnClick}>.</button>
          </div>
          <div className="calculator-keypad-function-column">
            <button type="button" className="key divide bg-orange" value="÷" onClick={this.processOnClick}>÷</button>
            <button type="button" className="key multiply bg-orange" value="x" onClick={this.processOnClick}>×</button>
            <button type="button" className="key subtract bg-orange" value="-" onClick={this.processOnClick}>-</button>
            <button type="button" className="key add bg-orange" value="+" onClick={this.processOnClick}>+</button>
            <button type="button" className="key equal bg-orange" value="=" onClick={this.processOnClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorUI;
