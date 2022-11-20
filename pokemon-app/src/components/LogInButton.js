// This code was provided by Auth0's documentation 
// found @: https://auth0.com/docs/quickstart/spa/react/interactive

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;