import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import "../Hero/Hero.css";
// import { makeStyles } from '@mui/material/core/styles'

// const useStyles = makestyles((theme) => ({
//     section: {
//         height
//     }
// }))
export default function Hero() {
  return (
    <Paper className="hero">
      <container className="hero-container" maxWidth="md">
        <Grid container className="hero-grid" maxWidth="lg">
          
          <Grid className="hero-profile-and-text">
            <Grid className="hero-profile"></Grid>
            <Typography className="hero-text" maxWidth="md">
              <p>Lorem ipsum dolor sit amet consectetur,</p>{" "}
              <p>adipisicing elit. Sequi tempore fugit,</p> quos ex quidem, odio
              maiores nesciunt delectus vitae at cum incidunt{" "}
              <p>
                quam veritatis similique repudiandae non nostrum alias debitis.
              </p>
            </Typography>
          </Grid>
          <Grid className="featured-project-image"></Grid>
        </Grid>
      </container>
    </Paper>
  );
}
