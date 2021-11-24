import { Component } from 'react';
import './App.css';
import Aside from './components/asidecomponent.jsx';
import Header from './components/headercomponent.jsx';
import PostSection from './components/postComponent';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      parentData : "I am parent"
    }

    this.callBackFunction = this.callBackFunction.bind(this);
  }

  callBackFunction = (data) => {
    this.setState({parentData : data});
  }

  render()
  {
    return (
      <>
      <Header/>
      <p>{this.state.parentData}</p>
      <div className="container mt-3">
        <div className="row">
          <PostSection parentData = {this.callBackFunction}/>
          <Aside/>
        </div>
      </div>
      </>
    );
  }
}

export default App;
