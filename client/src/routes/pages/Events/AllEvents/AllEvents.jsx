import React, { useEffect } from "react";

import {
  NavBar,
  EventsButtons,
  EventsDirectory,
  InputFocus,
  Footer,
} from "../../../../common/sharedComponents";
import images from "../../../../constants";
import { FaSearch } from "react-icons/fa";

import { useSelector } from "react-redux";
import { events } from "../../../../features/selectors";


import "./AllEvents.scss";

const AllEvents = () => {
  const eventsFromState = useSelector(events);


  return (
    <>
      <NavBar />
      <div className="events__wrapper">
        <div className="events__image-bg">
          <img src={images.EventSafariRally} alt="Event" />
        </div>
        <EventsButtons />
        <div className="events__search">
          <form className="nosubmit">
            <InputFocus classType = "nosubmit" placeholder="Search..." />
          </form>
        </div>
        <div className="events__items-wrapper">
          <div className="events__items">
            <p>THIS WEEK (JUNE 10TH - JUNE 17TH)</p>
            {/* we need an event component that will be wrapped on the div */}
            <EventsDirectory eventsData={eventsFromState} />
          </div>
          <div className="events__pic">
            <p className="events__border-title">Top pics.....</p>
            <div className="events__border"></div>
            <p className="events__border-text">
              EVENT NAME EVENT VENUE EVENT DATE TICKETS
            </p>
            <div className="events__border"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllEvents;
