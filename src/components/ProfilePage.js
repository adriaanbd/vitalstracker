import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './styles/ProfilePage.css';
import './styles/HeaderRibbon.css';

function ProfilePage(props) {
  return (
    <div id="profile-page-frame">
      <div id="profile-top">
        <HeaderRibbon title="Profile"
                      icon={<FontAwesomeIcon icon={faAngleLeft} />}
                      iconTitle="angle-left"
        />
        <div id="profile-avatar-name-gender-box">
          <div id="profile-avatar-box">
            { <FontAwesomeIcon icon={faUserCircle} size="8x"/> }
          </div>
          <div id="name-gender-box">
            <div id="profile-name-box">Emma Watson</div>
            <div id="profile-gender-height-box">
              <span id="profile-gender">Female</span>
              <span id="profile-gender-height-border">|</span>
              <span id="profile-height">120lbs</span>
            </div>
          </div>
        </div>
      </div>
      <div id="profile-bot"></div>
    </div>
  );
}

export default ProfilePage;