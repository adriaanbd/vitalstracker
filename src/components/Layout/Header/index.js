import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pane, Icon, Text } from 'evergreen-ui';

function HeaderRibbon(props) {
  const { icon, title } = props;
  return (
    <Pane
      display="flex"
      justifyContent="spaceBetween"
      alignItems="center"
      backgroundColor="#62b5e5"
      color="whitesmoke"
      height="10vh"
      width="100vw"
      elevation={1}
    >
      <Pane width="30%">
        {icon ? (
          <Link to="/menu" id="angle-left">
            <Icon icon="chevron-left" marginLeft="0.4em" color="whitesmoke" size="1.5em" />
          </Link>
        ) : ''}
      </Pane>
      <Text
        display="flex"
        width="70%"
        alignItems="center"
        justifyContent="center"
        fontSize="1.8em"
        color="inherit"
      >
        {title}
      </Text>
      <Pane width="30%" id="ribbon-right" />
    </Pane>
  );
}

HeaderRibbon.defaultProps = {
  icon: undefined,
  title: 'Track.It',
};

HeaderRibbon.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default HeaderRibbon;
