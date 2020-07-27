import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { HeaderMenu } from "./features/headerMenu/headerMenu";
import 'normalize.css';
import {useState} from "react";

const App = () => {
    const [activetab, setActiveTab] = useState<number>(0);
    return (
      <>
      <HeaderMenu active={ activetab } setActive={setActiveTab}/>
      </>
    );
  };

export default hot(App);
