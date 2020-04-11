import React from 'react';
import { useSelector } from 'react-redux';
import { Pane } from 'evergreen-ui';
import MenuHeader from './Header/MenuHeader';
import MenuItem from './Header/MenuItem';
import Layout from '../Layout';

function Menu() {
  const { user } = useSelector(state => state);
  return (
    <Layout title="More">
      <Pane
        display="flex"
        flexDirection="column"
        height="80%"
        width="100vw"
      >
        <MenuHeader
          name={user.username ? user.username : sessionStorage.username}
          gender="Lego"
        />
        <Pane
          display="flex"
          flexDirection="column"
          height="100%"
          color="#67899c"
        >
          <MenuItem
            icon="locate"
            title="Your goal"
            relPath="goal"
          />
          <MenuItem
            icon="inbox"
            title="Mailing list"
            relPath="goal"
          />
          <MenuItem
            icon="user"
            title="Your profile"
            relPath="profile"
          />
          <MenuItem
            icon="cog"
            title="Settings"
            relPath="settings"
          />
          <MenuItem
            icon="info-sign"
            title="Help"
            relPath="help"
          />
        </Pane>
      </Pane>
    </Layout>
  );
}

export default Menu;
