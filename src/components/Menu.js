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
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import './styles/Menu.css';
import Layout from './Layout';

function Menu() {
  return (
    <Layout title='More'>
      <div className="menu-frame">
        <MenuHeader avatar={<FontAwesomeIcon icon={faUserTie} size="2x"/>} name={'John Doe'} gender={'Male'}/>
        <div className="menu-items-frame">
          <MenuItem icon={<FontAwesomeIcon icon={faBullseye} />} title={'Your goal'} />
          <MenuItem icon={<FontAwesomeIcon icon={faEnvelope} />} title={'Mailing list'} />
          <MenuItem icon={<FontAwesomeIcon icon={faUser} />} title={'Your profile'} />
          <MenuItem icon={<FontAwesomeIcon icon={faCog} />} title={'Settings'} />
          <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />} title={'Help'} />
        </div>
      </div>
    </Layout>
  );
}

export default Menu;