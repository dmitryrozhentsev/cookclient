import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { CookList } from "./cook-list/cook-list";

const App = () => {
    return (
      <>
          <CookList />
      </>
    );
  };

export default hot(App);
