import React from "react";
import Grid from "@material-ui/core/Grid";

import ContactForm from "../components/contact-form";
import ContactPersonal from "../components/contact-personal";
import Divider from "@material-ui/core/Divider";
const Contact = (props) => {
  return (
    <div className="contact-main-container" id="contact">
      <h1 className="contact-heading text-color-blue">CONTACT ME</h1>
      <Divider className="contact-divider" />
      <div className="contact-container">
        <Grid container xs={12} spacing={0}>
          <Grid className="contact-subContainer" item xs={5}>
            <ContactForm {...props} />
          </Grid>
          <Grid item sx={1}>
            <Divider
              className="contact-divider contact-vertical-divider"
              orientation="vertical"
            />
          </Grid>
          <Grid
            className="contact-subContainer"
            item
            xs={5}
            className="contact-personal-container"
          >
            <ContactPersonal {...props} />
          </Grid>
        </Grid>
      </div>
      <div className="contact-mobile">
        <ContactForm {...props} />
      </div>
    </div>
  );
};

export default Contact;
