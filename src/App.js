import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DebateRoom from './pages/DebateRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debate" element={<DebateRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
