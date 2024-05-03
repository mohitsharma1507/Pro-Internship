
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import SignIn from './components/signIn';
import Webpage from "./components/Webpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Webpage />} />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/signIn" element={ <SignIn /> } />
        
      </Routes>
    </Router>
  );
}

export default App;