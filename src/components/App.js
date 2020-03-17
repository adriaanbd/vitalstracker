import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import NavFooter from './NavFooter';
import './styles/App.css';
import Menu from './Menu';

function App() {
  return (
    <>
      <HeaderRibbon />
      <Menu />
      <NavFooter />
    </>
  );
}

export default App;