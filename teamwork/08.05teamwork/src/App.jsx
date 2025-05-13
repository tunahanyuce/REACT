import { useState } from "react";

import Header from "./components/header/Header";
import CardContainer from "./components/cardContainer/CardContainer";

import "./App.scss";
import { data } from "./helper/data";

function App() {
  const [searchPlayer, setSearchPlayer] = useState("");

  return (
    <>
      <Header setSearchPlayer={setSearchPlayer} />
      <CardContainer searchPlayer={searchPlayer} data={data} />
    </>
  );
}

export default App;
