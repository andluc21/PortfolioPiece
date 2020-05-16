import React from "react";

export const Password = props => {
  const { onChange, isValid } = props;
  return (
    <div classname="password">
      <label htmlFor="password">Password</label>
      {!isValid ? <span>Invalid!</span> : null}
      <input
        type="text"
        className=""
        placeholder="Password"
        type="text"
        name="password"
        noValidate
        onChange={onChange}
        isValid={isValid}
      />
    </div>
  );
};
