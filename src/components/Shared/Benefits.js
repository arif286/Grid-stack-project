import { Grid } from '@material-ui/core';
import AirplayIcon from "@material-ui/icons/Airplay";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SettingsIcon from '@material-ui/icons/Settings';
import SpaIcon from "@material-ui/icons/Spa";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import RadioButton from './RadioButton';

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	button: {
		display: "flex",
		justifyContent: "end",
		alignItems: "center"
	},

});
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
	return (
    <>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} className={classes.root}>
          <Link>Benefits</Link>
          <CustomButton style={benefitBtn} text="Add Benefits" />
        </Grid>
        {list.map((item) => (
          <Grid key={item.id} item xs={4}>
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