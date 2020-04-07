import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pane, Icon, Text } from 'evergreen-ui';

const STYLE = {
  textDecoration: 'none',
};

function MenuItem(props) {
  const { relPath, icon, title } = props;
  return (
    <Link to={`/menu/${relPath}`} style={STYLE}>
      <Pane
        display="flex"
        alignItems="center"
        backgroundColor="#e5eaee"
        color="#67899C"
        paddingLeft={8}
        border="default"
        elevation={1}
      >
        <Icon icon={icon} />
        <Text padding={16}>{title}</Text>
      </Pane>
    </Link>
  );
}

MenuItem.propTypes = {
  relPath: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
