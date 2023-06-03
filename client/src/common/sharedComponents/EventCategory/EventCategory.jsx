import React from 'react'
import { Button } from '../../sharedComponents'

import './EventCategory.scss'
const EventCategory = ({ eventData, routeToSingleEvent }) => {
  const { imageUrl, title, date, company, price } = eventData;
  return (
    <div className='category-container' onClick={routeToSingleEvent}>
      <img
        className='background-image'
        src={imageUrl} />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{company}</p>
        <p>ksh {price}</p>
        <Button classType='primary' color='blue'>Buy Now</Button>
      </div>

    </div>
  )
}

export default EventCategory