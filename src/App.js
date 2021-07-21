import React from "react";
import styled from "styled-components";

import Authenticate from "./Authenticate.js";
import SignUserMessage from "./SignUserMessage.js";
import GetLatestBlock from "./GetLatestBlock.js";
import VerifyUserMessage from "./VerifyUserMessage";

const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Authenticate />
      <SignUserMessage />
    </Wrapper>
  );
}

export default App;
