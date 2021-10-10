import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "assets/sass/main.scss";

const HomePage = lazy(
  () => import(/* webpackChunkName: "HomePage" */ "./pages/Home")
);

function App() {
  return (
    <Suspense fallback={<h6>Loading ...</h6>}>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
}

export default App;
