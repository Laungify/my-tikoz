import React, { Fragment } from 'react'
import { Auth, Admin, Contacts, About, DisplayActivities, AllEvents, SingleEvent, NoMatch, CheckOut } from "./pages";
import { NavBar } from "../common/sharedComponents"
import ProtectedRoutes from './ProtectedRoutes.jsx'



// contains all routes exported as a component at the App level to be able to see browserHistory, links, etc
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/checkout' element={<ProtectedRoutes ><CheckOut /></ProtectedRoutes>} />
        <Route path="/" element={<DisplayActivities />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Fragment>

  );
};

export default AppRoutes;
