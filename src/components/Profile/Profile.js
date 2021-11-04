
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import banner from "../../assets/images/banner.png";
import Form from "../Shared/Form";

// import profile from "../../assets/images/profile.png";


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
				<Form />

      </div>
    </Card>
  );
}
export default  Profile