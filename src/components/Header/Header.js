import {
	AppBar, CssBaseline, makeStyles, Toolbar, useMediaQuery, useTheme
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "grey",
      borderBottom: "1px solid white",
    },
  },
  header: {
    justifyContent: "end",
    backgroundColor: "white",
    color: "#000",
    height: "90px",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.header}>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Company
            </Link>
            <Link to="/about" className={classes.link}>
              Find Candidate
            </Link>
            <Link to="/contact" className={classes.link}>
              Guide
            </Link>
            <div className={classes.person}>
              <PersonIcon style={{ color: "black" }} />
              <span className={classes.textColor}>Hi, Elise!</span>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
