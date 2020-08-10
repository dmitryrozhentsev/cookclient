import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { hot } from "react-hot-loader/root";
import { HeaderMenu } from "./features/headerMenu/headerMenu";
import { CookList } from "./features/cookList/cookList";
import 'normalize.css';
import {useState} from "react";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
const store = configureStore();

const App = () => {
    const [activetab, setActiveTab] = useState<number>(0);
    return (
        <Provider store={store}>
          <Router>
              <HeaderMenu active={ activetab } setActive={setActiveTab} />
              <Switch>
                  <Route exact path='/' component={ CookList }/>
              </Switch>
          </Router>
        </Provider>
    );
  };

export default hot(App);
