import './App.css';
import Aside from './components/asidecomponent.jsx';
import Header from './components/headercomponent.jsx';
import PostSection from './components/postComponent';

function App() {
  return (
    <>
    <Header/>
    <div className="container mt-3">
      <div className="row">
        <PostSection/>
        <Aside/>
      </div>
    </div>
    </>
  );
}

export default App;
