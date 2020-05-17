import React from "react";
import "./Admin.css";

import { useHistory } from "react-router-dom";

export const ThaButton = props => {
  let history = useHistory();

  function handleClick() {
    history.push("/adminLanding");
  }

  return (
    <div className="createAccount2">
      <button type="button" onClick={handleClick}>
        Sign In
      </button>
    </div>
  );
};
