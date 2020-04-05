import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Text } from 'evergreen-ui';

const STYLE = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  textDecoration: 'none',
  color: 'whitesmoke',
};

function FooterItem(props) {
  const { link, icon, title } = props;
  return (
    <Link
      to={`/${link}`}
      style={STYLE}
    >
      <Icon icon={icon} size={24} />
      <Text color="whitesmoke">{title}</Text>
    </Link>
  );
}

export default FooterItem;
