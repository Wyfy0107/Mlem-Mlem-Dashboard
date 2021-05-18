import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Lock from "../Img/padlock.png";

const Text = styled.div`
  font-size: 1.5em;
  color: white;
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 1rem;
    text-align: center;
  }
`;

const LogIn = styled.div`
  margin-top: 15rem;
  margin-right: auto;
  margin-left: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
const Title = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;
function MainPage() {
  return (
    <Card>
      <Title>WELCOME TO MLEM MLEM </Title>
      <Text>
        Mlem Mlem assists to deploy your website easy, quick and convenient.
      </Text>
      <LogIn>
        <img src={Lock} alt="error" height="50rem" width="50rem" />

        <CustomLink to="/login">
          <Text>Log in</Text>
        </CustomLink>
      </LogIn>
    </Card>
  );
}

export default MainPage;
