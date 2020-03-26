import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faSmile,
  faWeight,
  faThermometerHalf,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';

import {Switch, Route} from 'react-router-dom';
import NavFooter from './components/NavFooter';
import Menu from './components/Menu';
import TrackitCards from './components/TrackitCards';
import ProgressPage from './pages/ProgressPage/ProgressPage';
import './App.css';
import ProfilePage from './components/ProfilePage';
import VitalsPage from './pages/VitalsPage/VitalsPage';
import AddVitalCard from './components/AddVitalCard';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <VitalsPage />
        </Route>
        <Route exact path="/vitals">
          <VitalsPage />
        </Route>
        <Route exact path="/vitals/weight">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faWeight} size="3x" /> }
            title="Add Weight"
            id="0"

          />
        </Route>
        <Route path="/tracker">
          <TrackitCards />
        </Route>
        <Route path="/progress">
          <ProgressPage />
        </Route>
        <Route path="/menu">
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