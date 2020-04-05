import React from 'react';
import { Pane, Avatar, Text } from 'evergreen-ui';

function MenuHeader(props) {
  const { name, gender } = props;
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="flexStart"
      width="100%"
      height="5em"
      border="default"
      elevation={1}
    >
      <Avatar
        src={`https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 9)}.jpg`}
        name={name}
        size={40}
        margin="1em"
      />
      <Pane
        display="flex"
        flexDirection="column"
      >
        <Text color="#35434c">{ name }</Text>
        <Text color="#62b5e5">{ gender }</Text>
      </Pane>
    </Pane>
  );
}

export default MenuHeader;
