import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from 'evergreen-ui';
import VitalCard from './VitalCard';
import './VitalsPage.css';
import Layout from '../Layout';
import vitals from '../../utils/vitalCards';

function VitalCards(props) {
  const { title } = props;
  return (
    <>
      <Layout title={title}>
        <Pane display="flex" flexWrap="wrap" height="80%" width="90%">
          {Object.keys(vitals).map(vital => (
            <VitalCard
              icon={vitals[vital].icon}
              title={vitals[vital].title}
              className={vitals[vital].className}
              id={vitals[vital].id}
              path={vitals[vital].path}
              key={vitals[vital].path}
            />
          ))}
        </Pane>
      </Layout>
    </>
  );
}

VitalCards.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VitalCards;
