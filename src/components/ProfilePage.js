import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faUserCircle,
  faTrophy,
  faStar,
  faStarOfLife,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import HeaderRibbon from './HeaderRibbon';
import ProfileBadge from './ProfileBadge';
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
      <div id="profile-bot">
        <div id="edit-box">
          <div id="profile-edit-photo-box" className="profile-edit-box">
            <span id="profile-edit-photo" className="profile-edit">
              Edit Photo
            </span>
          </div>
          <div id="profile-edit-profile-box" className="profile-edit-box">
            <span id="profile-edit-profile" className="profile-edit">
              Edit Profile
            </span>
          </div>
        </div>
        <div id="badges-box">
          <div id="badges-title-box">
            <span id="badges-title">
              Your badges
            </span>
          </div>
          <div id="all-badges-container">
            <ProfileBadge
              icon={ <FontAwesomeIcon icon={faTrophy} /> }
              data={ '100' }
            />
            <ProfileBadge
              icon={ <FontAwesomeIcon icon={faStar} /> }
              data={ '100' }
            />
            <ProfileBadge
              icon={ <FontAwesomeIcon icon={faStarOfLife} /> }
              data={ '100' }
            />
            <ProfileBadge
              icon={ <FontAwesomeIcon icon={faShieldAlt} /> }
              data={ '100' }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;