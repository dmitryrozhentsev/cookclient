import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { HeaderMenu } from "./features/headerMenu/headerMenu";
import { CookList } from "./features/cookList/cookList";
import 'normalize.css';
import {useState} from "react";import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    const [activetab, setActiveTab] = useState<number>(0);
    return (
      <Router>
          <HeaderMenu active={ activetab } setActive={setActiveTab} />
          <Switch>
              <Route path='/' exact component={ CookList }/>
          </Switch>
      </Router>
    );
  };

export default hot(App);
