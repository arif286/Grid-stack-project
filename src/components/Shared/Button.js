import { makeStyles } from '@material-ui/core';
import React from 'react';



const Button = ({ style: { width, height, radius }, text }) => {
  const useStyles = makeStyles(() => ({
    root: {
      height: height,
      width: width,
      borderRadius: radius,
      outline: "none",
      border: "1px solid #B3B3B3",
    },
  }));
  const classes = useStyles();
  return (
    <>
			<button className={classes.root}>{text}</button>
    </>
  );
};

export default Button;