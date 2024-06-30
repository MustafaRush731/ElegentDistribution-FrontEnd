import './App.css'
import SearchBar from './components/SearchBar'
import Carousel from './components/Carousel'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import { CategoriesPage } from './components/Categories'
import Stats from './components/Stats'
import ProductPage from './components/ProductPage'
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ItemCarousel from './components/ItemCarousel'
import Testing from './components/Testing'

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
      <div className="flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App


