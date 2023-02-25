import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div className="mx-2">
        <Banner />
        <Welcome />
      </div>
    </>
  );
}

export default App;
