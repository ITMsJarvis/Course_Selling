
import React, { useEffect, useState } from "react";
import {Typography} from "@mui/material"

const AuthGuard = (WrappedComponent) => {

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
          <Typography variant="h4">UNAUTHORIZED ACCESS</Typography>
        </>
      );
    }
  };

  return GuardedComponent;
};

export default AuthGuard;
