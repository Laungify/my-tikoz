import React from 'react'

import './EventCategory.scss'
const EventCategory = ({eventData, routeToSingleEvent}) => {
  const  {imageUrl, title, date, company, price } = eventData;
  return (
    <div className='category-container' onClick={routeToSingleEvent}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{company}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default EventCategory