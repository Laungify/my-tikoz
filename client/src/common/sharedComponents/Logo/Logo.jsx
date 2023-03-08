import React from 'react'

import images from '../../../constants'
import './Logo.scss'
const Logo = () => {
  return (
    <div className="image__logo">
        <img src={images.logo} alt="logo" />
    </div>
  )
}

export default Logo