import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth/auth';
import LandinPage from './components/landingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route path="auth/" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
