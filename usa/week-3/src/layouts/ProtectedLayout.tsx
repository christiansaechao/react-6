import React from "react";
import { Outlet } from "react-router";

function ProtectedLayout() {
  // user validation

  if(user is not logged in)
    redirect('/login')

  return (
    <div>
      <navbar></navbar>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default ProtectedLayout;
