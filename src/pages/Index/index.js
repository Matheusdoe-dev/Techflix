import React from "react";
// components
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import { Container, Grid } from "@material-ui/core";
import Categorie from "../../components/Categorie/index";
// styled-components
import { TrendVideo, IndexContainer, Videos } from "./styles";
// imgs

const Index = () => {
  fetch("https://www.youtube.com/watch?v=YQr5CIRZ4Og")
    .then((response) => response.json())
    .then((response) => console.log(response));

  return (
    <>
      <Header background="var(--secondary-2)" />

      <IndexContainer>
        <TrendVideo>
          <Container fluid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <h1>Video aula sobre React Router Dom</h1>
                <span>Collabcode</span>
                <p>
                  Nesse video iremos aprender como utilizar a biblioteca React
                  Router do React, que serve para fazer as rotas do site, e
                  poder navegar entre elas como uma SPA.
                </p>
              </Grid>
              <Grid item xs={12} sm={5}>
                <iframe
                  src="https://www.youtube.com/embed/YQr5CIRZ4Og"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Grid>
            </Grid>
          </Container>
        </TrendVideo>

        <Videos>
          <Container fluix>
            <Categorie
              title="Desenvolvimento Web"
              src1="https://www.youtube.com/embed/tzbpAqb2Wjc"
            />
          </Container>
        </Videos>
      </IndexContainer>

      <Footer />
    </>
  );
};

export default Index;
