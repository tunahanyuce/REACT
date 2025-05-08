import Header from "./components/header/Header";
import CardContainer from "./components/cardContainer/CardContainer";
import { useState } from "react";
import { data } from "./helper/data.js";
import "./App.scss";

function App() {
  const [searchPlayer, setSearchPlayer] = useState("");

  return (
    <>
      <Header setSearchPlayer={setSearchPlayer} />
      <CardContainer data={data} searchPlayer={searchPlayer} />
    </>
  );
}

export default App;
