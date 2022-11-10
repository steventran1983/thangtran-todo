import axios from "axios";
import { useState, useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(
          "https://thang-todo.herokuapp.com/api/authen/isLoggedIn"
        );
        console.log("Thang Cong Tu 5555555555");
        return res.data;
      } catch (err) {
        return false;
      }
    };

    const data = verify();
    console.log(`Thang Tran day ${data}`);
    setAuth(DataTransfer);
  });
  console.log(auth);
  return { auth };
};
