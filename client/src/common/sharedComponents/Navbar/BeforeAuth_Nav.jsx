import React from 'react'
import { motion } from "framer-motion"


import images from '../../../constants'

import './BeforeAuth_Nav.scss'
const BeforeAuth_Nav = () => {
  return (
    <motion.div>
    <div className="app__bg-img">
      <img src={images.music} alt="background-image" />
    </div>
  </motion.div>
  )
}

export default BeforeAuth_Nav