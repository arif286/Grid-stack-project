import { makeStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { useState } from 'react';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "45px",
    background: "white",
    outline: "none",
    border: "1px solid #C6C6C6",
		borderRadius: "32px",
		cursor: "pointer",
  },
  home: {
    color: "#C6C6C6",
  },
});

const RadioButton = ({data:{icon:Icon, text}}) => {
	console.log(text);
	const [changeIcon, setChangeIcon] = useState(false);
	const classes = useStyles();
	return (
    <>
      <button className={classes.root}>
				<Icon/>
        {text}
        {!changeIcon ? (
          <RadioButtonUncheckedIcon className={classes.home} />
        ) : (
          <CheckCircleIcon />
        )}
      </button>
    </>
  );
};

export default RadioButton;