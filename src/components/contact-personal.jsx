import React from "react";
import Grid from "@material-ui/core/Grid";
import ShareIcon from '../components/ShareIcon';

const ContactPersonal = (props) => {
  return (
    <Grid
      container
      className="contact-subContainer"
      direction="column"
      justify="flex-start"
    >
      <Grid item>
        <h3 style={{ marginTop: 0 }}>Manik Manktahla</h3>
        <p>{props.about.Role}</p>
      </Grid>
      <Grid item>
        <h3>Phone</h3>
        <p>{props.about.links.phone_number}</p>
      </Grid>
      <Grid item>
        <h3>Email</h3>
        <p>{props.about.links.email}</p>
      </Grid>
      <Grid item>
        <ShareIcon links={props.about.links}/>
      </Grid>
    </Grid>
  );
};

export default ContactPersonal;
