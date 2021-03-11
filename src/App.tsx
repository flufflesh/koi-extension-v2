import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  MemoryRouter,
} from "react-router-dom";
import Login from "./containers/Login";
import Profiles from "./containers/Profiles";
import Sidebar from "./containers/Sidebar";
import styled from "styled-components";
import Diy from "./containers/Diy";
import GroupScripts from "./containers/GroupScripts";
import Restocks from "./containers/Restocks";
import Addons from "./containers/Addons";
import NikeSNKRS from "./containers/NikeSNKRS";
import Accounts from "./containers/Accounts";
import StoreScripts from "./containers/StoreScripts";

const MainRoutes = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: linear-gradient(180deg, #0b0e37 0%, #080a2e 98.74%);
`;

function App() {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <MainRoutes>
          <Sidebar />
          <Route path="/profiles">
            <Profiles></Profiles>
          </Route>
          <Route path="/diy">
            <Diy></Diy>
          </Route>
          <Route path="/group-scripts">
            <GroupScripts></GroupScripts>
          </Route>
          <Route path="/restocks">
            <Restocks></Restocks>
          </Route>
          <Route path="/addons">
            <Addons></Addons>
          </Route>
          <Route path="/nike-snkrs">
            <NikeSNKRS></NikeSNKRS>
          </Route>
          <Route path="/accounts">
            <Accounts></Accounts>
          </Route>
          <Route path="/store-scripts">
            <StoreScripts />
          </Route>
        </MainRoutes>
      </Switch>
    </MemoryRouter>
  );
}

export default App;
