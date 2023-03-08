import React from 'react'

import images from "../../../constants";

import './ProfilePic.scss'
const ProfilePic = ({toggle}) => {
  return (
    <img
      className="profile__icon"
      src={images.profile}
      alt="trolley"
      onClick={toggle}
    />
  )
}

export default ProfilePic