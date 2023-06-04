import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Shop />

        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
