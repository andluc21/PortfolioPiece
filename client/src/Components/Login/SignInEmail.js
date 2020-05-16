import React from "react";

export const SignInEmail = props => {
  const { onChange, isValid } = props;
  return (
    <div classname="email">
      <label className="label2" htmlFor="email">
        {" "}
        Email {" ___"}
      </label>
      {!isValid ? <span>Invalid!</span> : null}
      <input
        type="text"
        className=""
        placeholder="Email"
        type="text"
        name="email"
        noValidate
        onChange={onChange}
        isValid={isValid}
      />
    </div>
  );
};
