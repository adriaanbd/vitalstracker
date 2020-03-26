import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faSmile,
  faWeight,
  faThermometerHalf,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';

import HeaderRibbon from '../../components/HeaderRibbon';
import VitalCards from '../../components/VitalCards';
import AddVitalCard from '../../components/AddVitalCard';

function VitalsPage() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <>
      <Switch>
        <Route path="/vitals/systolic"></Route>
        <Route path="/vitals/diastolic"></Route>
        <Route path="/vitals/weight">
          {console.log('hello')}
          <h1>Weight</h1>
          <AddVitalCard
            icon={ <FontAwesomeIcon icon={faWeight} size="3x" /> }
            title="Add Weight"
            id="0"
          />
        </Route>
        <Route path="/vitals/mood"></Route>
        <Route path="/vitals/temperature"></Route>
        <Route path="/vitals/glucose"></Route>
      </Switch>
      <VitalCards />
    </>
  );
}

export default VitalsPage;