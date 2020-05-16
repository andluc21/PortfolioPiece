import React from "react";
import { useState } from "react";

import "./Admin.css";
import { Password } from "./Password";
import { SignInPassword } from "./SignInPassword";
import { Email } from "./Email";
import { SignInEmail } from "./SignInEmail";
import { ThaButton } from "./Button";

export const AdminSignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");

  const onPasswordChange = event => {
    setPassword(event.target.value);
  };
  const onEmailChange = event => {
    setEmail(event.target.value);
  };

  const onSignInPasswordChange = event => {
    setSignInPassword(event.target.value);
  };

  const onSignInEmailChange = event => {
    setSignInEmail(event.target.value);
  };

  const isPasswordValid = password
    ? password.length > 5 && password.length < 15
    : true;

  const isSignInPasswordValid = signInPassword
    ? signInPassword.length > 5 && signInPassword.length < 15
    : true;

  const isEmailValid = email ? email.indexOf("@") > -1 : true;

  const isSignInEmailValid = signInEmail ? signInEmail.indexOf("@") > -1 : true;

  const onSubmitHandler = () => {};
  return (
    <div>
      <h1 className="adminheader">Admin </h1>
      <div classname="form-wrapper">
        <h2 className="adminheader"> New User ?</h2>
        <form onsubmit={onSubmitHandler}>
          <Email onChange={onEmailChange} isValid={isEmailValid} />
          <Password onChange={onPasswordChange} isValid={isPasswordValid} />

          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
          <h2 className="adminheader"> Sign In</h2>

          <SignInEmail
            onChange={onSignInEmailChange}
            isValid={isSignInEmailValid}
          />
          <SignInPassword
            onChange={onSignInPasswordChange}
            isValid={isSignInPasswordValid}
          />

          <ThaButton />
        </form>
      </div>
    </div>
  );
};
