import React from 'react'

import images from "../../../constants";

import './ProfilePic.scss'
const ProfilePic = ({onClick}) => {
  return (
    <img
      className="profile__icon"
      src={images.profile}
      alt="trolley"
      onClick={onClick}
    />
  )
}

export default ProfilePic