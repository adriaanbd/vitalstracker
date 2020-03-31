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
import LoginPage from './components/LoginPage';
import Menu from './components/Menu';
import TrackitCards from './components/TrackitCards';
import ProgressPage from './components/ProgressPage';
import './App.css';
import ProfilePage from './components/ProfilePage';
import AddVitalCard from './components/AddVitalCard';
import VitalCards from './components/VitalCards';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/vitals">
          <VitalCards title='Vitals'/>
        </Route>
        <Route exact path="/tracker">
          <TrackitCards />
        </Route>
        <Route exact path="/progress">
          <ProgressPage />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route path="/menu/profile">
          <ProfilePage />
        </Route>
        <Route path="/menu/goal"><UnderConstruction /></Route>
        <Route path="/menu/mail"><UnderConstruction /></Route>
        <Route path="/menu/settings"><UnderConstruction /></Route>
        <Route path="/menu/help"><UnderConstruction /></Route>
        <Route path="/vitals/weight">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faWeight} size="5x" /> }
            title="Add your weight"
            id="0"
          />
        </Route>
        <Route path="/vitals/systolic">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faHeartbeat} size="5x" /> }
            title='Add systolic pressure'
            id='1'
          />
        </Route>
        <Route path="/vitals/diastolic">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faHeartbeat} size="5x" /> }
            title='Add your diastolic pressure'
            id='2'
          />
        </Route>
        <Route path="/vitals/mood">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faSmile} size="5x" /> }
            title='Add your mood'
            id='3'
          />
        </Route>
        <Route path="/vitals/temperature">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faThermometerHalf} size="5x" /> }
            title='Add your temperature'
            id='4'
          />
        </Route>
        <Route path="/vitals/glucose">
          <AddVitalCard
              icon={ <FontAwesomeIcon icon={faAppleAlt} size="5x" /> }
              title='Add your glucose'
              id='5'
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;