import PageNotFound from "components/error/PageNotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUserDetails } from "store/actions/authAction";

// APP ROUTES
import { ROUTES } from "./Routes";

const AppRoutes = (props) => {
  const { isUserLoggedIn } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  return (
    <Switch>
      {ROUTES?.map((route, index) => {
        return route.isPrivate ? (
          <Route
            exact
            key={index}
            path={route.path}
            name={route.name}
            render={(props) =>
              isUserLoggedIn ? (
                <route.component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location },
                  }}
                />
              )
            }
          />
        ) : (
          <Route
            exact
            key={index}
            path={route.path}
            name={route.name}
            render={(props) => <route.component {...props} />}
          />
        );
      })}

      <Redirect exact path="/home" to="/" />
      <Route path="*" name="Not Found" render={() => <PageNotFound />} />
    </Switch>
  );
};

export default AppRoutes;
