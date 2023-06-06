import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import Error from './Components/Error/Error';

function App() {
  return (
    <div>
      <Header></Header>

      {/* React Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
