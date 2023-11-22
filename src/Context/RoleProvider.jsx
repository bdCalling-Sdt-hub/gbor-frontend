import React, { createContext } from "react";
import LoginUserData from "../Shared/logingUserData/LoginUserData";

export const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const allContext = LoginUserData();
  console.log(allContext);
  return (
    <RoleContext.Provider value={{ identity: allContext }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
