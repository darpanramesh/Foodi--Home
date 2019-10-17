import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MDBInput, } from "mdbreact";




const useStyles = makeStyles(theme => ({
  container: {
   
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    color:'white',
    
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },


  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%'
  },
}));

function Input(props) {
  return (
    <div>
      <MDBInput
        label={props.label}
        group
        type={props.type}
        validate
        error={props.error}
        success={props.success}
      />
    </div>
  );
}

function OutlinedTextFields(props) {
  const classes = useStyles();



  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="outlined-email-input"
        label={props.label}
        className={classes.textField}
        type={props.type}
        name={props.name}
        autoComplete="email"
        margin="normal"
        style={props.style}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
      />

    </form>
  );
}

export {
  Input,OutlinedTextFields
}