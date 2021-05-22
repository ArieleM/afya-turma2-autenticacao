import React from 'react';
import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes';

import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  return (
    <>
      <Routes/>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
