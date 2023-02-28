import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";
import Content from "./components/Cards/Content";
import Address from "./components/Address";

function App() {
  return (
    <>
      <div className="mx-2">
        <Banner />
        <Welcome />
        <Content color="purple" content="Public IPv4 address is: ">
          <Address host="https://api.ipify.org?format=json" />
        </Content>
        <Content color="purple" content="Public IPv6 address is: ">
          <Address host="https://api64.ipify.org?format=json	" />
        </Content>
      </div>
    </>
  );
}

export default App;
