import React from "react";
// components
import Header from "../Header/index";
import { Container, Grid } from "@material-ui/core";
// styled-components
import { HeroContainer } from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <Container fluid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Sua plataforma de conteúdo sobre demanda de tecnologia</h1>
            <p>Aproveite e assista onde quiser.</p>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
