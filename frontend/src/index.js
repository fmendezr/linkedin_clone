import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PrivateRoute from './Utils/PrivateRoute'

import { AuthProvider } from './Context/AuthContext';

import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<HomePage />} exact/>
        </Route>
        <Route  path='/login' element={<LoginPage />}/>
      </Routes>
    </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
