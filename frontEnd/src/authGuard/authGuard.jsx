import { TrendingUpRounded } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AuthGuard = (WrappedComponent) => {
  // will check from the http request whether the token is verified or not? and will then return either the component
  // or UNAUTHORIZED

  const GuardedComponent = (props) => {
    const [isAuthenticated, setAuthentaction] = React.useState(false);

    useEffect(() => {
      async function getToken() {
        const token = await localStorage.getItem("token");
        if (token) {
          setAuthentaction(true);
        }
      }
      getToken();
    });

    if (isAuthenticated) {
      return <WrappedComponent {...props} />; // return the captured component if token is valid
    } else {
      return (
        <>
          <h1>UNAUTHORIZED</h1>
        </>
      );
    }
  };

  return GuardedComponent;
};

export default AuthGuard;
