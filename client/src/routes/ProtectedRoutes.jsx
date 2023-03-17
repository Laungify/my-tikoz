import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
