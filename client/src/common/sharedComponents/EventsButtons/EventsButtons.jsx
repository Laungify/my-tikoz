import React from "react";

import { Button } from '../'

import "./EventsButtons.scss";
const EventsButtons = () => {
  return (
    <div className="events__activities">
      <ul>
        {["MUSIC CONCERTS", "PLAYS", "SPORTS", "CONFERENCES", "MEET-UPS"].map(
          (event, index) => (
            <li key={`event-${index}`}>
              <Button classType="events">{event}</Button>{" "}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default EventsButtons;
