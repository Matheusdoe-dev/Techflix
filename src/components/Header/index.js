import React from "react";
// components
import { Container, Grid } from "@material-ui/core";
import { Button } from "../../styles/objects/button";
import { Link, useHistory } from "react-router-dom";
import { HeaderContainer } from "./styles";
// styled-components
import { Brand } from "../../styles/components/brand";
// imgs
import logoImg from "../../assets/icons/techflix.svg";

const Header = ({ background }) => {
  const history = useHistory();

  const handleEntrar = (event) => {
    event.preventDefault();
    history.push("/index");
  };

  return (
    <HeaderContainer background={background}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Link to="/index">
              <Brand src={logoImg} alt="Techlix" />
            </Link>
          </Grid>
          <Grid item container xs={12} sm={8} justify="flex-end">
            <Button variant="contained" color="primary" onClick={handleEntrar}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
