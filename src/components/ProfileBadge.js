import React from 'react';

function ProfileBadge(props) {
  return (
    <div className="profile-badge-box">
      <div className="profile-badge-icon">{ props.icon }</div>
      <div className="profile-badge-data">{ props.data }</div>
    </div>
  );
}

export default ProfileBadge;