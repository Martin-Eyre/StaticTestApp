import React, {useState} from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  console.log("this", this.props.userAuthenticated() );

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        this.props.userAuthenticated() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;