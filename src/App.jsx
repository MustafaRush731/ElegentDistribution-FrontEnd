import './App.css'
import SearchBar from './components/SearchBar'
import Carousel from './components/Carousel'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import Stats from './components/Stats'

import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ItemCarousel from './components/ItemCarousel'


const MainApp = () => {
  return (
    <main>
      <SearchBar />
      <Carousel />
      <ItemCarousel />
    </main>
  );
};

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App


