import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Discover from './Pages/Discover';
import Home from './Pages/Home';
import Sidebar from './Components/Sidebar';
import Clock from './Pages/Clock';
import Wallet from './Pages/Wallet';
import Calendar from './Pages/Calendar';
import Settings from './Pages/Settings';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/discover' element={<Discover />}></Route>
          <Route path='/clock' element={<Clock />}></Route>
          <Route path='/wallet' element={<Wallet />}></Route>
          <Route path='/calendar' element={<Calendar />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
