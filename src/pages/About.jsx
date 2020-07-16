import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import MyInfo from "../components/MyInfo";
import PersonalInfo from "../components/PersonalInfo";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <div>
    <div className="about-mainGrid">
      <Grid container xs={12} className="about-grid">
        <div className="about-color-grid">
          <div className="about-gridOne" />
          <div className="about-gridTwo" />
        </div>
      </Grid>

      <Grid container className="about-container" spacing={2}>
        <Grid item className="about-myinfo">
          <MyInfo {...props} />
        </Grid>
        <Grid item style={{ textAlign: "initial" }}>
          <PersonalInfo {...props} />
        </Grid>
      </Grid>
      <div className="about-mobile">
        <Grid item className="about-myinfo">
          <MyInfo {...props} />
        </Grid>
        <Grid item style={{ textAlign: "initial" }}>
          <PersonalInfo {...props} />
        </Grid>
      </div>
    </div>
    </div>
  );
};

export default About;
