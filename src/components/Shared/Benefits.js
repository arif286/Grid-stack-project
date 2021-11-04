import { Grid } from '@material-ui/core';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import AirplayIcon from "@material-ui/icons/Airplay";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SettingsIcon from '@material-ui/icons/Settings';
import SpaIcon from "@material-ui/icons/Spa";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import React from 'react';
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import InputField from './InputField';
import RadioButton from './RadioButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  link: {
    color: "#F15A29",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const list = [
  {
    icon: WifiTetheringIcon,
		text: "Excellent Health Care",
		id: 1
  },
  {
    icon: HomeWorkIcon,
		text: "Daily Snacks",
		id:2
  },
  {
    icon: TrendingUpIcon,
		text: "Group Activities",
		id:3
  },
  {
    icon: SettingsIcon,
		text: "Volunteer Opportunities",
		id:4
  },
  {
    icon: SpaIcon,
		text: "Wellness Programs",
		id:5
  },
  {
    icon: AirplayIcon,
		text: "Paid time off",
		id:6
  },
];
const Benefits = () => {
	const benefitBtn = {
    width: "120px",
    height: "35px",
    radius: "25px",
    border: "1px solid #C6C6C6",
    bgColor: "#FFFFFF",
  };
	const skipBtn = {
    width: "80px",
    height: "35px",
    radius: "25px",
    bgColor: "#FFFFFF",
    border: "1px solid #2D3E8B",
	};
	const saveBtn = {
    width: "100px",
    height: "35px",
    radius: "25px",
    bgColor: "#2D3E8B",
		border: "1px solid #C6C6C6",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		marginLeft: "10px",
  };
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
	return (
    <>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} className={classes.root}>
          <Link className={classes.link} to="/benefit">
            Benefits
          </Link>
          <CustomButton
            handleOpen={() => {
              handleOpen();
            }}
            style={benefitBtn}
            text="Add Benefits"
          />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Modal</h2>
                <InputField placeholder="name" />
                <InputField placeholder="field" />
                <button onClick={handleClose}>Close</button>
              </div>
            </Fade>
          </Modal>
        </Grid>
        {list.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <RadioButton data={item} />
          </Grid>
        ))}
        <Grid item xs={12} className={classes.button}>
          <CustomButton style={skipBtn} text="Skip" />
          <CustomButton
            style={saveBtn}
            text="Save"
            icon={PlayCircleFilledIcon}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Benefits;