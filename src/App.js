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
import Menu from './components/Menu';
import TrackitCards from './components/TrackitCards';
import ProgressPage from './pages/ProgressPage/ProgressPage';
import './App.css';
import ProfilePage from './components/ProfilePage';
import AddVitalCard from './components/AddVitalCard';
import VitalCards from './components/VitalCards';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <VitalCards />
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
        <Route exact path="/menu/profile">
          <ProfilePage />
        </Route>
        <Route path="/vitals/weight">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faWeight} size="3x" /> }
            title="Add Weight"
            id="0"
          />
        </Route>
        <Route path="/vitals/systolic">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faHeartbeat} size="3x" /> }
            title='Add Systolic'
            id='1'
          />
        </Route>
        <Route path="/vitals/diastolic">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faHeartbeat} size="3x" /> }
            title='Add Diastolic'
            id='2'
          />
        </Route>
        <Route path="/vitals/mood">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faSmile} size="3x" /> }
            title='Add mood'
            id='3'
          />
        </Route>
        <Route path="/vitals/temperature">
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faThermometerHalf} size="3x" /> }
            title='Add Temperature'
            id='4'
          />
        </Route>
        <Route path="/vitals/glucose">
          <AddVitalCard
              icon={ <FontAwesomeIcon icon={faAppleAlt} size="3x" /> }
              title='Add Glucose'
              id='5'
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;