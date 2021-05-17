import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../Img/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Img = styled.img`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20rem;
  justify-content: space-evenly;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
`;

function NavBar() {
  const classes = useStyles();
  return (
    <NavStyle className={classes.root}>
      <Img src={logo} alt="error" height="50rem" width="50rem" />

      <Button variant="contained">
        <Link to="/">HOME</Link>
      </Button>
      <Button variant="contained">
        <Link to="/">Deploy</Link>
      </Button>

      <Button variant="contained">
        <Link to="/login">Log in</Link>
      </Button>
    </NavStyle>
  );
}

export default NavBar;
