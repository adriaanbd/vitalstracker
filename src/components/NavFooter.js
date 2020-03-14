import React from 'react';
import FooterItem from './FooterItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTachometerAlt, faArrowRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './styles/NavFooter.css';


function NavFooter() {
  return (
    <div className="footer">
      <FooterItem
        icon={ <FontAwesomeIcon icon={faPlus} /> }
        title="Measure"
      />
      <FooterItem
        icon={ <FontAwesomeIcon icon={faArrowRight} /> }
        title="Track It"
      />
      <FooterItem
        icon={ <FontAwesomeIcon icon={faTachometerAlt} /> }
        title="Progress"
      />
      <FooterItem
        icon={ <FontAwesomeIcon icon={faEllipsisH} /> }
        title="More"
      />
    </div>
  );
}

export default NavFooter;