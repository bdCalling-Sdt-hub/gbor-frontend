import { useEffect, useState } from "react";
import axios from "../../../Config";

const LoginUserData = () => {
  const token = localStorage.token;
  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    axios
      .get("/api/auth/loggeduser", {
        headers: {
          "Content-type": "application",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIdentity(res.data.data?.identity);
      })
      .catch((err) => console.log(err));
  }, []);
  return identity;
};

export default LoginUserData;
