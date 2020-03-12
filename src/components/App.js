import React from 'react';
import HeaderRibbon from './HeaderRibbon'
import NavFooter from './NavFooter';
import VitalCards from './VitalCards';
import './styles/App.css';

function App() {
  return (
    <>
      <HeaderRibbon />
      <VitalCards />
      <NavFooter />
    </>
  );
}

export default App;
