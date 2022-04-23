import React from 'react';
import './App.css';
import CalculatorUI from './components/CalculatorUI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <CalculatorUI />
      </div>
    );
  }
}

export default App;
