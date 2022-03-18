import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth/auth';

function App() {
  return (
    <>
      <Routes>
        <Route path="auth/" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
