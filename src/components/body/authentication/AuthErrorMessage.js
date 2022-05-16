import React from "react";
import Alert from "@mui/material/Alert";

const AuthErrorMessage = (props) => {
  return (
    <Alert variant="outlined" severity="error">
      {props.message}
    </Alert>
  );
};

export default AuthErrorMessage;
