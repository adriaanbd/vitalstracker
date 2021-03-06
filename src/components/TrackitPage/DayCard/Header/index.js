import React from 'react';
import PropTypes from 'prop-types';
import { Pane, Heading } from 'evergreen-ui';

function DayCardHeader(props) {
  const { title } = props;
  return (
    <Pane
      display="flex"
      padding={8}
      background="tint2"
      alignItems="center"
      elevation={1}
      border="default"
    >
      <Heading
        size={400}
        paddingLeft={4}
        color="#526e7d"
        fontWeight={600}
      >
        {title}
      </Heading>
    </Pane>
  );
}

DayCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DayCardHeader;
