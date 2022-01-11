import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [results, setResults] = useState([]);
  console.log(results);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setResults={setResults} />
        </Route>
        <Route path="/products">
          <ProductList setResults={setResults} />
        </Route>
        <Route path="/product/:id">
          <Product setResults={setResults} />
        </Route>
        <Route path="/cart">
          <Cart setResults={setResults} />
        </Route>
        <Route path="/success">
          <Success setResults={setResults} />
        </Route>
        <Route path="/search">
          <Search setResults={setResults} result={results} />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
