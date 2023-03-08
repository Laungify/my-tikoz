import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import EventCategory from "../EventCategory/EventCategory";

import "./EventsDirectory.scss";
const EventsDirectory = ({ eventsData }) => {
  const navigate = useNavigate();

  const routeToAnEvent = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="directory-container">
      {eventsData.map((eventData) => (
        <EventCategory
          key={eventData.id}
          eventData={eventData}
          routeToSingleEvent={() => routeToAnEvent(eventData.id)}
        />
      ))}
    </div>
  );
};

export default EventsDirectory;
