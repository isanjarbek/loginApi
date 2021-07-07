import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);

  const url = "http://localhost:5000/api/users";

  const fetchData = async () => {
    await axios.get(url).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/admin">
          {token ? (
            <>
              <CreateUser />
              <Users users={users} setUsers={setUsers} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
