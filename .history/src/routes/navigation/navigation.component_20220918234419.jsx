import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="Na">
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
