import React from "react";
import { Switch, Route,Redirect,  useLocation } from "react-router-dom";
import UserPage from "./components/userPage";
import UserInfo from "./components/userInfo";

const Routes = () => {
  const location = useLocation();
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/users" />
        <Route
          path={[
            "/users",
            "/userInfo"
          ]}
        >
          <Switch location={location} key={location.pathname}>
            <Route
              path="/users">
                <UserPage />
            </Route>
            <Route path="/userInfo/:id">
              <UserInfo />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
