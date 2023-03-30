import React, { useEffect } from "react";
import { useNavigate,redirect } from "react-router-dom";
import { useCurrentUser } from "../common/customHooks";
import { Button } from "../common/sharedComponents";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();

  return currentUser ? children : 
  <>
      <div className="not-found">
      <h1>Hi this is a protected page </h1>
      <p>Register or log in before accessing it</p>
      <Button onClick={() => navigate("/auth")} classType="activity" color="yellow">Sign In</Button>
    </div>
    </>
  

};

export default ProtectedRoutes;

// import {Route, redirect} from 'react-router-dom'
// import {useCurrentUser} from "../common/customHooks";

// const  ProtectedRoutes = ({component:Component, ...rest}) => {
//   const {currentUser} = useCurrentUser()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : redirect('/auth')
//     }}>
//     </Route>
//   )
// }

// export default ProtectedRoutes