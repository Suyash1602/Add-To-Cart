import React from "react";
import List from "./Components/List";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";

function App() {
  return (
    <Provider store={Store}>
      <h1>Shopping Cart with Redux</h1>
      <List />
      <Cart />
    </Provider>
  );
}

export default App;
