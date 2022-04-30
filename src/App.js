import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CalculatorUI from './components/CalculatorUI';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/calculator" element={<CalculatorUI />} />
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
