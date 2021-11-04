import { makeStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import React from 'react';
import InputField from "../Shared/InputField";
import SelectField from './SelectField';


const useStyles = makeStyles({
  size: {
    width: "100%",
  },
  label: {
    width: "100%",
  },
  area: {
    width: "100%",
    height: "150px",
    border: "1px solid #8D8D8D",
    borderRadius: "5px",
    outline: "none",
    marginTop: "20px",
    color: "#666666",
    padding: "12px 0px 0 12px",
  },
});
const option = ['Facebook', 'Google', 'Linkedin']

const Form = () => {
	const classes = useStyles();
	return (
    <>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12}>
          <label className={classes.label} htmlFor="about">
            About Company*
          </label>
          <textarea
            className={classes.area}
            name="about"
            placeholder="Type in your Summery"
          ></textarea>
        </Grid>
        <Grid item xs={6}>
          <label>Website</label>
          <InputField placeholder="Website (Url)" />
          <label>Company Size*</label>
          <InputField placeholder="Employees" />
          <label>Type</label>
          <InputField placeholder="Enter text" />
        </Grid>
        <Grid item xs={6}>
          <label>Industry*</label>
          <SelectField option={option} />
          <label>Headquarters</label>
          <InputField placeholder="Enter text" />
          <label>Founded</label>
          <InputField placeholder="Enter text" />
        </Grid>
        <Grid item xs={12}>
          <label>Specialties</label>
          <InputField placeholder="Enter text" />
        </Grid>
        <CardActions>
          <Button size="small" color="primary">
            Skip
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </CardActions>
      </Grid>
    </>
  );
};

export default Form;