import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./containers/Login";
import Profiles from "./containers/Profiles";
import Sidebar from "./containers/Sidebar";
import styled from "styled-components";

const MainRoutes = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <MainRoutes>
          <Sidebar />
          <Route path="/profiles">
            <Profiles></Profiles>
          </Route>
        </MainRoutes>
      </Switch>
    </Router>
  );
}

export default App;
