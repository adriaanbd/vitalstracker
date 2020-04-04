import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faInfoCircle,
  faCog,
  faUser,
  faEnvelope,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import MenuHeader from './Header/MenuHeader';
import MenuItem from './Header/MenuItem';
import './Menu.css';
import Layout from '../Layout';

function Menu() {
  const { user } = useSelector(state => state.users);
  return (
    <Layout title="More">
      <div className="menu-frame">
        <MenuHeader
          avatar={<FontAwesomeIcon icon={faUserTie} size="2x"/>}
          name={user.username ? user.username : localStorage.username}
          gender="Gender"
        />
        <div className="menu-items-frame">
          <MenuItem
            icon={<FontAwesomeIcon icon={faBullseye} />}
            title="Your goal"
            relPath="goal"
          />
          <MenuItem
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            title="Mailing list"
            relPath="goal"
          />
          <MenuItem
            icon={<FontAwesomeIcon icon={faUser} />}
            title="Your profile"
            relPath="profile"
          />
          <MenuItem
            icon={<FontAwesomeIcon icon={faCog} />}
            title="Settings"
            relPath="settings"
          />
          <MenuItem
            icon={<FontAwesomeIcon icon={faInfoCircle} />}
            title="Help"
            relPath="help"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Menu;