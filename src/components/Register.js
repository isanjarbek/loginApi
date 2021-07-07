import React, { useState } from "react";
import { Button, Dialog, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const useStyles = makeStyles({
    body: {
      paddingLeft: "30%",
    },
    input: {
      width: 200,
      marginTop: 30,
      display: "block",
    },
  });
  const classes = useStyles();

  const URL = "http://localhost:5000/api/users/register";
  
  const handleRegister = async (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: URL,
      data: {
        fullname: fullname,
        phone: phone,
        password: password,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.body}>
      <form onSubmit={handleRegister}>
        <TextField
          className={classes.input}
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          label="fullname"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label="phone"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.input}
          type="submit"
        >
          Register
        </Button>
        <Link to="/login">Login page</Link>
      </form>
    </div>
  );
};

export default Login;
