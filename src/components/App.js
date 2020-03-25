import React from 'react';
import {Switch, Route} from 'react-router-dom';
import VitalCards from './VitalCards';
import NavFooter from './NavFooter';
import Menu from './Menu';
import TrackitCards from './TrackitCards';
import ProgressPage from './ProgressPage';
import './styles/App.css';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/"><Menu /></Route>
        <Route path="/measurement"><VitalCards /></Route>
        <Route path="/tracker"><TrackitCards /></Route>
        <Route path="/progress"><ProgressPage /></Route>
        <Route path="/menu"><Menu /></Route>
        <Route path="/profile"><ProfilePage /></Route>
      </Switch>
      <NavFooter />
    </>
  );
}

export default App;