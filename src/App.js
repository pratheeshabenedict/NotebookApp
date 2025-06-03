import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Notecard from './components/Notecard';
import Noteform from './components/Noteform';
import Notelist from './components/Notelist';
import Themetoggle from './components/Themetoggle';

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Header />
        <Themetoggle />
        <Routes>
          <Route path="/" element={<Noteform />} />
          <Route path="/notes" element={<Notelist />} />
          <Route path="/note/:id" element={<Notecard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
