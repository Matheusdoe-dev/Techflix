import React from "react";
// components
import Hero from "../../components/Hero/index";
import Footer from "../../components/Footer/index";
import { Container, Grid } from "@material-ui/core";
// styled-components
import { HomeSection } from "./styles";
// imgs
import home1 from "../../assets/img/home-1.jpg";
import home2 from "../../assets/img/home-2.jpg";

const Home = () => {
  return (
    <>
      <Hero />

      <HomeSection background="linear-gradient(180deg, #252831 3.51%, #40424A 98.11%)">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={7}>
              <h2>Assista na sua TV!</h2>
              <p>
                Assista vídeos dos mais variados temas sobre tecnologia do
                conforto de sua casa.
              </p>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={home1} alt="" />
            </Grid>
          </Grid>
        </Container>
      </HomeSection>

      <HomeSection background="var(--secondary-1)">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={7}>
              <h2>Variedade</h2>
              <p>Consuma conteúdo dos mais diversos assuntos de tecnologia.</p>
            </Grid>
            <Grid item xs={12} sm={5}>
              <img src={home2} alt="" />
            </Grid>
          </Grid>
        </Container>
      </HomeSection>

      <Footer />
    </>
  );
};

export default Home;
