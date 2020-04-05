import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Icon, Text } from 'evergreen-ui';

function MenuItem(props) {
  const { relPath, icon, title } = props;
  return (
    <Link to={`/menu/${relPath}`} className="menu-link">
      <Pane
        display="flex"
        alignItems="center"
        backgroundColor="#e5eaee"
        paddingLeft={8}
        border="default"
        elevation={1}
      >
        <Icon icon={props.icon} />
        <Text padding={16}>{title}</Text>
      </Pane>
    </Link>
  );
}

export default MenuItem;
