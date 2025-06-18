import React from "react";

import "./App.css";
import Counter from "./components/counter/Counter";
import { store } from "./redux/store";
import {Provider} from "react-redux"

const App = () => {
  return (
    <div className="app">
    <Provider store={store}>
      <Counter />
    </Provider>

    </div>
  );
};

export default App;
