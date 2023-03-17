import React from 'react'
import {
  ToggledSourceController,
  Button,
  Footer,
} from "../../../common/sharedComponents";

import './CheckOut.scss' 
const CheckOut = () => {
  return (
    <>
      <div className="not-found">
      <h1>Sorry 😢😢😢😔 - Page Not Found</h1>
      <button classType="activity" color="yellow">GO BACK HOME</button>
    </div>
    <Footer />

      </>
  )
}

export default CheckOut