import React from "react";
import { useNavigate } from "react-router-dom";

import { useCurrentUser } from "../common/customHooks";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();
  return currentUser ? children : navigate("/auth");
};

export default ProtectedRoutes;
