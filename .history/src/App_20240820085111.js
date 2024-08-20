import './App.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Log />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
