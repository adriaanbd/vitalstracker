import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faSmile,
  faWeight,
  faThermometerHalf,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';
import VitalCard from './VitalCard';
import './styles/VitalsCards.css';
import Layout from './Layout';

function VitalCards(props) {
  // title should come from redux state that gets it from api call
  return (
    <>
      <Layout title={props.title}>
        <div className="vitals-frame">
          <VitalCard
            icon={ <FontAwesomeIcon icon={faHeartbeat} size="3x" /> }
            title='Systolic Pressure'
            className='vital-card'
            id='systolic-card'
            path='systolic'
          />
          <VitalCard
            icon={ <FontAwesomeIcon icon={faHeartbeat} size="3x" /> }
            title='Diastolic Pressure'
            className='vital-card'
            id='diastolic-card'
            path='diastolic'
          />
          <VitalCard
            icon={ <FontAwesomeIcon icon={faWeight} size="3x" /> }
            title='Weight'
            className='vital-card'
            id='weight-card'
            path='weight'
          />
          <VitalCard
            icon={ <FontAwesomeIcon icon={faSmile} size="3x" /> }
            title='Mood'
            className='vital-card'
            id='mood-card'
            path='mood'
          />
          <VitalCard
            icon={ <FontAwesomeIcon icon={faThermometerHalf} size="3x" /> }
            title='Temperature'
            className='vital-card'
            id='temperature-card'
            path='temperature'
          />
          <VitalCard
            icon={ <FontAwesomeIcon icon={faAppleAlt} size="3x" /> }
            title='Glucose'
            className='vital-card'
            id='glucose-card'
            path='glucose'
          />
        </div>
      </Layout>
    </>
  );
}

export default VitalCards;
