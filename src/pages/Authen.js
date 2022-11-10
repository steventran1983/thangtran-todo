import React from "react";
import { useState } from "react";
import Register from "../component/register/Register";
import Login from "../component/login/Login";
import "./authen.css"
const Authen = () => {
  const [toggle, setToggle] = useState(true);
  const handleToogle = () => {
    setToggle(false);
    console.log("This just for fun");
  };

  return (

      <div className="authen-container">

			{toggle ? (
        <Login setToggle={setToggle} />
        ) : (
          <Register setToggle={setToggle} />
          )}
      </div>
  );
};

export default Authen;
