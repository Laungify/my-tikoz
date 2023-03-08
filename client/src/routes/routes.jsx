
import {Auth,Admin,Contacts,About,DisplayActivities,AllEvents,SingleEvent,NoMatch} from "./pages";


// contains all routes exported as a component at the App level to be able to see browserHistory, links, etc
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<DisplayActivities />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  );
};

export default AppRoutes;
