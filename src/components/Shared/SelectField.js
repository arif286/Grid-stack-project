import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    height: "45px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid #B3B3B3",
    width: "100%",
    paddingLeft: "12px",
    marginTop: "15px",
		marginBottom: "15px",
		backgroundColor: "#fff"
  },
}));

const SelectField = ({ option }) => {
  const classes = useStyles();
  return (
		<select className={classes.root}>
			<option>Select Industry</option>
      {option.map((option) => (
				<option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectField;
