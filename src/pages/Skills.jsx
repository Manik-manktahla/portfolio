import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Skills = (props) => {
  const classes = useStyles();
  const num = props.skills.length / 2
  const map1 = props.skills.slice(0, Math.ceil(num));
  const map2 = props.skills.slice(Math.ceil(num), props.skills.length);
  console.log(map1, map2);
  return (
    <div className="skills-container" id="skills">
      <h1 className="text-color-blue">SKILLS</h1>
      <Divider />
      <Grid
        container
        xs={12}
        spacing={3}
        justify="center"
        alignItems="center"
        className="skills-subcontainer"
      >
        <Grid item xs={5}>
          <List component="nav" aria-label="main mailbox folders">
            {map1.map((item) => {
              return (
                <ListItem button>
                  <Grid container direction="row" xs={12}>
                    <Grid item xs={8}>
                      <Typography component="p">{item.skill_name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Rating name="read-only" value={item.rating} readOnly className="text-color-blue" />
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={2}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5}>
          <List component="nav" aria-label="main mailbox folders">
            {map2.map((item) => {
              return (
                <ListItem button>
                  <Grid container direction="row" xs={12}>
                    <Grid item xs={8}>
                      <Typography component="p">{item.skill_name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Rating name="read-only" value={item.rating} readOnly className="text-color-blue" />
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
