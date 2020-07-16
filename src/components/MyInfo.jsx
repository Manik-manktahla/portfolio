import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import posters from "../static/Untitled.png";
import ShareIcon from '../components/ShareIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MyInfo = (props) => {
  const classes = useStyles();
  return (
    <Card className="myinfo-main">
      <CardContent className="profile-photo">
        <Avatar src={posters} className="image" />
      </CardContent>
      <CardContent className="name-content">
        <Typography className="name" component="h2">
          {props.about.FirstName}
        </Typography>
        <Typography className="name" component="h2">
          {props.about.LastName}
        </Typography>
        <Divider className="about-divider" />
        <Typography className="work" component="h2">
          {props.about.Role}
        </Typography>
      </CardContent>
      <CardActions className="footer-actions" disableSpacing>
        <ShareIcon links={props.about.links}/>
      </CardActions>
    </Card>
  );
};

export default MyInfo;
