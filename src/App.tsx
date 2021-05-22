import React from 'react';
import GlobalStyles from './assets/GlobalStyles';
import Routes from './routes';


const App: React.FC = () => {
  return (
    <>
      <Routes/>
      <GlobalStyles />
    </>
  );
}

export default App;
