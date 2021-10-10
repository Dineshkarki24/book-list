import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "assets/sass/main.scss";
import Navbar from "components/Navbar";

const HomePage = lazy(
  () => import(/* webpackChunkName: "HomePage" */ "./pages/Home")
);
const CartPage = lazy(
  () => import(/* webpackChunkName: "CartPage" */ "pages/cart")
);

function App() {
  return (
    <Suspense fallback={<h6>Loading ...</h6>}>
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
