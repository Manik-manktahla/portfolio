import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from '@material-ui/icons/Email';

const ShareIcon = (props) => {
  return (
    <div>
      {props.links.linkedIn && (
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
      )}
      {props.links.email && (
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
      )}
      {props.links.instagram && (
        <IconButton aria-label="share">
          <InstagramIcon />
        </IconButton>
      )}
      {props.links.twitter && (
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton>
      )}
      {props.links.fb && (
        <IconButton aria-label="share">
          <FacebookIcon />
        </IconButton>
      )}
      {props.links.phone_number && (
        <IconButton aria-label="share">
          <CallIcon />
        </IconButton>
      )}
    </div>
  );
};

export default ShareIcon;
