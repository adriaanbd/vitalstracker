import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faSmile,
  faWeight,
  faThermometerHalf,
  faAppleAlt
} from '@fortawesome/free-solid-svg-icons';
import VitalCard from './VitalCard';
import './styles/VitalsCards.css'

function VitalCards() {
  // title should come from redux state that gets it from api call
  return (
    <div className="vitals-frame">
      <VitalCard
        icon={ <FontAwesomeIcon icon={faHeartbeat} /> }
        title={ "Systolic Pressure" }
        className="vital-card"
        id="systolic-card"
      />
      <VitalCard
        icon={ <FontAwesomeIcon icon={faHeartbeat} /> }
        title={ "Diastolic Pressure" }
        className="vital-card"
        id="diastolic-card"
      />
      <VitalCard
        icon={ <FontAwesomeIcon icon={faWeight} /> }
        title={ "Weight" }
        className="vital-card"
        id="weight-card"
      />
      <VitalCard
        icon={ <FontAwesomeIcon icon={faSmile} /> }
        title={ "Mood" }
        className="vital-card"
        id="mood-card"
      />
      <VitalCard
        icon={ <FontAwesomeIcon icon={faThermometerHalf} /> }
        title={ "Temperature" }
        className="vital-card"
        id="temperature-card"
      />
      <VitalCard
        icon={ <FontAwesomeIcon icon={faAppleAlt} /> }
        title={ "Glucose" }
        className="vital-card"
        id="glucose-card"
      />
    </div>
  )
}

export default VitalCards;
