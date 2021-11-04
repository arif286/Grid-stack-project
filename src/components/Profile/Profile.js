
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import banner from "../../assets/images/banner.png";
import profile from "../../assets/images/profile.png";
import Benefits from "../Shared/Benefits";
import Form from "../Shared/Form";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    margin: "auto",
		marginTop: "50px",
		marginBottom: "120px"
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
    padding: "12px 0px 0 12px",
  },
  padding: {
    padding: "30px",
    width: "100%",
  },
  edit: {
    position: "absolute",
    top: "165px",
    right: "14%",
  },
  large: {
    width: "120px",
		height: "120px",
		boxShadow: "0px 5px 15px grey"
	},
	editIcon: {
		width: "40px",
		height: "40px",
	},
	profile: {
		display: "flex",
		alignItems: "center",
		marginTop: "-80px",
		marginLeft: "30px",
	}
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={banner}
        title="Contemplative Reptile"
      />
      <Fab className={classes.edit} aria-label="edit">
        <EditIcon />
      </Fab>
      <div className={classes.profile}>
        <Avatar alt="profile" src={profile} className={classes.large} />
        <Fab className={classes.editIcon} aria-label="edit">
          <EditIcon />
        </Fab>
      </div>
      <div className={classes.padding}>
        <Form />
        <Benefits />
      </div>
    </Card>
  );
}
export default  Profile