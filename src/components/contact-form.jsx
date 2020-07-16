import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import * as emailjs from "emailjs-com";

const ContactForm = (props) => {
  const handleSubmit = (values) => {
    emailjs
      .send("gmail", "portfolio_template", values, "user_Hn1hO42fTGlyhHZx6mGHO")
      .then((response) =>
        console.log("SUCCESS!", response.status, response.text)
      )
      .catch((error) => console.log("error"));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className=".class-form">
          <Grid container spacing={3}>
            <Grid className="contact-grid" item xs={12} sm={6}>
              <TextField
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name"
                variant="outlined"
                className="contact-inputs"
              />
            </Grid>
            <Grid className="contact-grid" item xs={12} sm={6}>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                variant="outlined"
                className="contact-inputs email"
              />
              {errors.email && touched.email && errors.email}
            </Grid>
            <Grid className="contact-grid" item xs={12}>
              <TextField
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                placeholder="Subject"
                variant="outlined"
                className="contact-input contact-inputs"
              />
              {errors.subject && touched.subject && errors.subject}
            </Grid>
            <Grid className="contact-grid" item xs={12}>
              <TextField
                type="textArea"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                label="Message"
                variant="outlined"
                multiline
                rows={6}
                className="contact-input contact-inputs"
              />
            </Grid>
          </Grid>
          <Button
            className="contact-submit-button"
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
