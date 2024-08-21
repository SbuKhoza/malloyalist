import './App.css';
import Home from './Home';
import Sign from './Sign';
import Log from './Log';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/H" element={<Sign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
