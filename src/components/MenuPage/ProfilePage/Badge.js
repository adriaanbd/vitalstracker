import React from 'react';
import PropTypes from 'prop-types';

function ProfileBadge(props) {
  const { icon, data } = props;
  return (
    <div className="profile-badge-box">
      <div className="profile-badge-icon">{ icon }</div>
      <div className="profile-badge-data">{ data }</div>
    </div>
  );
}

ProfileBadge.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ProfileBadge;
