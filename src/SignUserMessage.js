import React, { useState } from "react";
import * as fcl from "@onflow/fcl";
import styled from "styled-components";

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`;

const Code = styled.pre`
  background: #f0f0f0;
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  padding: 5px;
`;

const GetLatestBlock = () => {
  const [userMessage, setUserMessage] = useState("userMessage");
  const [signedMessage, setSignedMessage] = useState("--");
  const [userAddress, setUserAddress] = useState("--");

  const signUserMessage = async (event) => {
    event.preventDefault();
    const hexMessage = utf8ToHex(userMessage);

    const response = await fcl.currentUser().signUserMessage(hexMessage);
    console.log(response);
    setSignedMessage(response.signature);
    setUserAddress(response.addr);
  };
  const handleChange = (event) => {
    console.log(event);
    setUserMessage(event.target.value);
    console.log("value changed: " + userMessage);
  };
  return (
    <Card>
      <label>
        message:
        <input type="text" value={userMessage} onChange={handleChange} />
      </label>
      <button onClick={signUserMessage}>Sign</button>
      <br />
      userAddress: {userAddress}
      <br />
      message: {signedMessage}
    </Card>
  );
};
function utf8ToHex(str) {
  return Array.from(str)
    .map((c) =>
      c.charCodeAt(0) < 128
        ? c.charCodeAt(0).toString(16)
        : encodeURIComponent(c).replace(/\%/g, "").toLowerCase()
    )
    .join("");
}
function hexToUtf8(hex) {
  return decodeURIComponent("%" + hex.match(/.{1,2}/g).join("%"));
}
export default GetLatestBlock;
