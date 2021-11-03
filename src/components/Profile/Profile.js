import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import banner from "../../assets/images/banner.png";
// import profile from "../../assets/images/profile.png";
import InputField from "../Shared/InputField";

const useStyles = makeStyles({
  root: {
    maxWidth: 1400,
    margin: "auto",
    marginTop: "50px",
  },
  media: {
    width: "100%",
    height: 265,
  },
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
		padding: "12px 0px 0 12px"
  },
  padding: {
    padding: "30px",
		width: "100%",
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={banner}
        title="Contemplative Reptile"
      />
      <div className={classes.padding}>
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
            <InputField placeholder="Select Industry" />
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
      </div>
    </Card>
  );
}
export default  Profile