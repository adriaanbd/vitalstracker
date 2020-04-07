import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faSmile,
  faWeight,
  faThermometerHalf,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';

const vitals = {
  systolic: {
    icon: <FontAwesomeIcon icon={faHeartbeat} size="3x" />,
    title: 'Sistolic Pressure',
    className: 'vital-card',
    id: 'systolic-card',
    path: 'systolic',
  },
  diastolic: {
    icon: <FontAwesomeIcon icon={faHeartbeat} size="3x" />,
    title: 'Diastolic Pressure',
    className: 'vital-card',
    id: 'diastolic-card',
    path: 'diastolic',
  },
  weight: {
    icon: <FontAwesomeIcon icon={faWeight} size="3x" />,
    title: 'Weight',
    className: 'vital-card',
    id: 'weight-card',
    path: 'weight',
  },
  temperature: {
    icon: <FontAwesomeIcon icon={faThermometerHalf} size="3x" />,
    title: 'Temperature',
    className: 'vital-card',
    id: 'temperature-card',
    path: 'temperature',
  },
  glucose: {
    icon: <FontAwesomeIcon icon={faAppleAlt} size="3x" />,
    title: 'Glucose',
    className: 'vital-card',
    id: 'glucose-card',
    path: 'glucose',
  },
  mood: {
    icon: <FontAwesomeIcon icon={faSmile} size="3x" />,
    title: 'Mood',
    className: 'vital-card',
    id: 'mood-card',
    path: 'mood',
  },
};

export default vitals;
