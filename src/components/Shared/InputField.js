import { makeStyles } from "@material-ui/core/styles";
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "45px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid #B3B3B3",
    width: "100%",
		paddingLeft: "12px",
		marginTop: "15px",
    marginBottom: "15px"
  },
}));

const InputField = ({ placeholder }) => {
	const classes = useStyles();
	return (
      <input className={classes.root} type="text" placeholder={placeholder} />
  );
};

export default InputField;