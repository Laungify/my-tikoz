import React from 'react'
import {
    ToggledSourceController,
    Button,
    Footer,
  } from "../../../common/sharedComponents";
import './NoMatch.scss'
const NoMatch = () => {
  return (
      <>
      <div className="not-found">
      <h1>Sorry 😢😢😢😔 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button classType="activity" color="yellow">GO BACK HOME</Button>
    </div>
    <Footer />

      </>

  )
}

export default NoMatch