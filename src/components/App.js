import React from 'react';
import {Switch, Route} from 'react-router-dom';
import VitalCards from './VitalCards';
import NavFooter from './NavFooter';
import Menu from './Menu';
import TrackitCards from './TrackitCards';
import ProgressPage from './ProgressPage';
import './styles/App.css';
import ProfilePage from './ProfilePage';
import HeaderRibbon from './HeaderRibbon';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeaderRibbon />
          <VitalCards />
        </Route>
        <Route path="/measurement">
          <HeaderRibbon />
          <VitalCards />
        </Route>
        <Route path="/tracker">
          <HeaderRibbon />
          <TrackitCards />
        </Route>
        <Route path="/progress">
          <HeaderRibbon />
          <ProgressPage />
        </Route>
        <Route path="/menu">
          <HeaderRibbon title='More'/>
          <Menu />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
      <NavFooter />
    </>
  );
}

export default App;