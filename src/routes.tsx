import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Logout from "./pages/logout";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="*" component={() => <>404</>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
