import './App.css'
import SearchBar from './components/SearchBar'
import Carousel from './components/Carousel'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'

import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


const MainApp = () => {
  return (
    <main>
      <SearchBar />
      <Carousel />
    </main>
  );
};

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/my-account" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App


