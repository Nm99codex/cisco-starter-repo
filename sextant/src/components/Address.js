import React, { useState } from "react";

function Address(props) {
  const [address, setAddress] = useState("");
  fetch(props.host)
    .then((response) => response.json())
    .then((data) => setAddress(data.ip));
  return <>{address}</>;
}

export default Address;
