import { useContext } from "react";
import { RoleContext } from "../Context/RoleProvider";

const useRole = () => {
  return useContext(RoleContext);
};

export default useRole;
