import React from "react";
import Highlighters from "./Highlighter/slider";
import "./app.css";
import Banner from "./Components/Banner";

const App = () => {
  return (
    <>
      <div className="app">
        <Banner />
        <Highlighters />
      </div>
    </>
  );
};

export default App;
