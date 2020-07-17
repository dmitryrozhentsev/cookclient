import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { CookList } from "./components/cook-list/cook-list";
import { AddCook } from "./components/add-cook/add-cook";

const App = () => {
    return (
      <>
          <AddCook />
          <CookList />
      </>
    );
  };

export default hot(App);
