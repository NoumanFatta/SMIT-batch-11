import React from "react";
import { useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return <div>404 Not Found</div>;
};
