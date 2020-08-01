import React from "react";
// components
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
// styled components
import { FooterContainer } from "./styles";
import { Brand } from "../../styles/components/brand";
// imgs
import logoImg from "../../assets/icons/techflix.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Container fluid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Link to="/conta">Conta</Link>
            <Link to="/conta/criar">Criar uma conta</Link>
            <Link to="/contato">Entre em contato</Link>
            <Link to="/faq">Conta</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/categorias">Categorias</Link>
            <Link to="/canais">Canais</Link>
            <Link to="/video/postar">Postar um video</Link>
          </Grid>
          <Grid item container xs={12} sm={4}>
            <Link to="/index">
              <Brand src={logoImg} alt="Techflix" justify="center" />
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Techflix 2020 @ Todos os direitos reservados.</p>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
