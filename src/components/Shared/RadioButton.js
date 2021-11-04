import { makeStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { useState } from 'react';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45px",
    background: "white",
    outline: "none",
    border: "1px solid #C6C6C6",
    borderRadius: "32px",
    cursor: "pointer",
  },
  icon: {
    color: "#8A7D76",
    marginRight: "15px",
  },
  iconColor: {
    color: "#FFFFFF",
    marginRight: "15px",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#F77631",
    color: "#FFFFFF",
  },
});

const RadioButton = ({data:{icon:Icon, text}}) => {
	const [changeIcon, setChangeIcon] = useState(false);
	const [update,setUpdate] = useState('');
	const classes = useStyles();
	const handleButton = () => {
		setChangeIcon(true)
		setUpdate('active')
	}
	return (
    <>
      <button
        onClick={() => handleButton()}
        className={`${classes.root} ${update ? classes.active : ""}`}
      >
        <div className={classes.iconText}>
          <Icon className={update ? classes.iconColor : classes.icon} />
          {text}
        </div>
        {!changeIcon ? (
          <RadioButtonUncheckedIcon className={classes.icon} />
        ) : (
          <CheckCircleIcon
            className={update ? classes.iconColor : classes.icon}
          />
        )}
      </button>
    </>
  );
};

export default RadioButton;