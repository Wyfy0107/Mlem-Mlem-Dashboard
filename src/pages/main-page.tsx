import React from "react";
import styled from "styled-components";
import ImgMainPage from "../Img/mainPage.jpg";
import NavBar from "./navBar";
import LogIn from "./login";

const Page = styled.div`
  background-image: url(${ImgMainPage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 15rem;
  margin-left: 3rem;
  margin-bottom: 0px;
  background-color: #f9fbfb;
  height: 5rem;
  width: 31rem;
`;

const Text = styled.div`
  font-size: 1rem;
  margin-top: 0rem;
  background-color: #f9fbfb;
  height: 10rem;
  width: 30rem;
  margin-left: 3rem;
`;

function MainPage() {
  return (
    <Page>
      <NavBar />
      <Title>WELCOME TO MLEM MLEM </Title>
      <Text>
        Mlem Mlem assist to deploy your website easy, quick and convenient.
      </Text>
      <LogIn />
    </Page>
  );
}

export default MainPage;
