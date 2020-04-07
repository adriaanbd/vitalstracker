import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from 'evergreen-ui';

function ProgressTile(props) {
  const { icon, title, measure } = props;
  return (
    <Pane
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="#67899c"
      margin="3%"
      height="25%"
      background="white"
      width="43%"
      elevation={1}
    >
      <Pane>{icon}</Pane>
      <Pane>
        <Pane>{title}</Pane>
        <Pane>{measure}</Pane>
      </Pane>
    </Pane>
  );
}

ProgressTile.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
};

export default ProgressTile;
