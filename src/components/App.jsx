/* eslint arrow-body-style: ["off", "as-needed"] */
/* eslint no-trailing-spaces: "off" */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home/index';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Home />
    </BrowserRouter>
  );
};

export default App; 
