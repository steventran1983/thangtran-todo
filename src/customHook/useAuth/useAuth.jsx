import axios from "axios";
import { useState, useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [auth, setAuth] = useState();

  const verify = async () => {
    try {
      const res = await axios.get(
        "https://thang-todo.herokuapp.com/api/authen/isLoggedIn"
      );
      console.log("Thang Cong Tu 989898798798798789798789787987897");
      console.log(res.data);
      return res.data;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await verify();
      console.log(`day la ${data}`);
      setAuth(true);
    })();
  });
  console.log(auth);
  return { auth };
};
