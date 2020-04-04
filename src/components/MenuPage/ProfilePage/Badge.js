import React from 'react';

function ProfileBadge(props) {
  const { icon, data } = props;
  return (
    <div className="profile-badge-box">
      <div className="profile-badge-icon">{ icon }</div>
      <div className="profile-badge-data">{ data }</div>
    </div>
  );
}

export default ProfileBadge;
