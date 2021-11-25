import { Component } from 'react';
import './App.css';
import Aside from './components/asidecomponent.jsx';
import Header from './components/headercomponent.jsx';
import PostSection from './components/postComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentData: "I am parent",
      allposts: null,
      current_posts: null,
    }

    this.callBackFunction = this.callBackFunction.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  callBackFunction = (data) => {
    this.setState({ current_data: data });
  }

  getPosts() {
    const url = "http://127.0.0.1:8000/api/list/";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          allposts: data,
          current_posts : data,
        })

      })
  }

  render() {
    return (
      <>
        <Header updateData={this.callBackFunction}
                posts={this.state.current_posts}
        />
        <div className="container mt-3">
          <div className="row">
            <PostSection posts={this.state.current_posts}/>
            <Aside />
          </div>
        </div>
      </>
    );
  }
}

export default App;
