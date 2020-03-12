import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import NavFooter from './NavFooter';
import TrackitCards from './TrackitCards';
import './styles/App.css';

function App() {
  return (
    <>
      <HeaderRibbon />
      <TrackitCards />
      <NavFooter />
    </>
  );
}

export default App;