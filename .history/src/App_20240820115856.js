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
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<H />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
