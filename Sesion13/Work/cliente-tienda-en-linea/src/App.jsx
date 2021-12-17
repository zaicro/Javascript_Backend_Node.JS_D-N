import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
//pages
import SingUpPage from './pages/SingUpPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route exact path="/" compnent={LoginPage} />
          <Route exact path="/signup" compnent={SingUpPage} />
          <Route exact path="/products" compnent={ProductsPage} />
          <Route compnent={NotFoundPage} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
