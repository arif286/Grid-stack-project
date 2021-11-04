import { makeStyles } from '@material-ui/core';
import React from 'react';

const CustomButton = ({
  style: {
    width,
    height,
    radius,
    bgColor,
    color,
    border,
    display,
    justifyContent,
    alignItems,
    marginLeft,
  },
  text,
	icon: Icon,
	handleOpen
}) => {
  const useStyles = makeStyles(() => ({
    root: {
      height,
      width,
      backgroundColor: bgColor,
      color,
      borderRadius: radius,
      outline: "none",
      border,
      cursor: "pointer",
      display,
      justifyContent,
      alignItems,
      padding: "10px",
      marginLeft,
    },
    icon: {
      color: "#818BB4",
		},
	}));
  const classes = useStyles();
  return (
    <>
      <button onClick={handleOpen} className={classes.root}>
        {text}
        {Icon && <Icon className={classes.icon} />}
      </button>
    </>
  );
};

export default CustomButton;