import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: white;
  font-size: 3rem;
  text-align: center;
  margin-top: 7rem;
`;
function login() {
  return (
    <div>
      <div>
        <Text>Log in </Text>
      </div>
    </div>
  );
}

export default login;
