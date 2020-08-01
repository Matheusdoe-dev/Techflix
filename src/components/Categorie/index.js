import React from "react";
// components
import { Grid } from "@material-ui/core";

const Categorie = ({ src1, src2, src3, title }) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <h2>{title}</h2>
      </Grid>
      <Grid item sm={4}>
        <iframe
          src={src1}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Grid>
      <Grid item sm={4}>
        <iframe
          src={src2}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Grid>
      <Grid item sm={4}>
        <iframe
          src={src3}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Grid>
    </Grid>
  );
};

export default Categorie;
