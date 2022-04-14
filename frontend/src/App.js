import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth/auth';
import LandinPage from './components/landingPage';
import Post from './components/particularpost';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route path="auth/" element={<Auth />} />
        <Route path='/post/:id' element={<Post/>} />
      </Routes>
    </>
  );
}

export default App;
