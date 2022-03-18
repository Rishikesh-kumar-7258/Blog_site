import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth/auth';
import Header from './components/header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="auth/" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
