import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Routes} from 'react-router-dom';
import Home from './components/homepage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    )
  }
}

export default App;