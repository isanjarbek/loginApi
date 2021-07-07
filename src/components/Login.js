import React, { useState } from "react";
import { Button, Dialog, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {
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

  const URL = "http://localhost:5000/api/users/login";

  const handleLogin = async (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: URL,
      data: {
        phone: phone,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.body}>
      <form onSubmit={handleLogin}>
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
          Login
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          style={{ marginTop: 20 }}
        >
          Logout
        </Button>
      </form>
    </div>
  );
};

export default Login;
