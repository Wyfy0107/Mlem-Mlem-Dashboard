import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../Img/startup.png";

const Img = styled.img`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40rem;
  margin-top: 1rem;
  justify-content: space-evenly;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  height: 3rem;
  width: 70%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 5rem;
  }
`;

const Text = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;
const NavCard = styled.div`
  display: flex;
  flex-direction: row;
`;
function NavBar() {
  return (
    <NavCard>
      <Img src={logo} alt="error" height="50rem" width="50rem" />

      <NavStyle>
        <CustomLink to="/">
          <Text>HOME</Text>
        </CustomLink>

        <CustomLink to="/">
          <Text>DEPLOY</Text>
        </CustomLink>

        <CustomLink to="/login">
          <Text>LOG IN</Text>
        </CustomLink>
      </NavStyle>
    </NavCard>
  );
}

export default NavBar;
