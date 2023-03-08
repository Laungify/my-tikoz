import React from 'react'
import { motion } from "framer-motion"


import images from '../../../constants'

import './HomeNav.scss'
const HomeNav = () => {
  return (
    <motion.div>
    <div className="app__bg-img">
      <img src={images.music} alt="background-image" />
    </div>
  </motion.div>
  )
}

export default HomeNav