import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTachometerAlt, faArrowRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import FooterItem from './FooterItem';
import './styles/NavFooter.css';


function NavFooter() {
  return (
    <div className="footer">
      <FooterItem
        icon={<FontAwesomeIcon icon={faPlus} />}
        title="Measure"
        link="vitals"
      />
      <FooterItem
        icon={<FontAwesomeIcon icon={faArrowRight} />}
        title="Track It"
        link="tracker"
      />
      <FooterItem
        icon={<FontAwesomeIcon icon={faTachometerAlt} />}
        title="Progress"
        link="progress"
      />
      <FooterItem
        icon={<FontAwesomeIcon icon={faEllipsisH} />}
        title="More"
        link="menu"
      />
    </div>
  );
}

export default NavFooter;