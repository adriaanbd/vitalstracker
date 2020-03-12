import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import NavFooter from './NavFooter';
import './styles/App.css';
import ProgressPage from './ProgressPage';

function App() {
  return (
    <>
      <HeaderRibbon />
      <ProgressPage />
      <NavFooter />
    </>
  );
}

export default App;