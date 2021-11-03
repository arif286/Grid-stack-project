import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    justifyContent: "end",
    backgroundColor: "white",
		color: "#666666",
		height: "90px",
  },
  title: {
    marginRight: "25px",
  },
  person: {
    display: "flex",
    alignItems: "center",
    justifyContent: "between",
  },
  textColor: {
    color: "#F15A29",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography className={classes.title} variant="p">
            Company
          </Typography>
          <Typography className={classes.title} variant="p">
            Find Candidate
          </Typography>
          <Typography className={classes.title} variant="p">
            Guide
          </Typography>
          <Typography className={classes.title} variant="p">
            |
          </Typography>
          <div className={classes.person}>
            <PersonIcon style={{ color: "black" }} />
            <span className={classes.textColor}>Hi, Elise!</span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;