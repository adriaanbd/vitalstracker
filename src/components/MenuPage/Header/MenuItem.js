import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Icon, Text } from 'evergreen-ui';

function MenuItem(props) {
  const { relPath, icon, title } = props;
  return (
    <Link to={`/menu/${relPath}`} style={{ textDecoration: 'none' }}>
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

export default MenuItem;
