import React from 'react';
import Routes from './routes';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Routes/>
    </RecoilRoot>
  );
};

export default App;
