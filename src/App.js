import React from "react";

import Tutorial from "./components/Tutorial/Tutorial";
import MyTerminal from "./components/Terminal/Terminal";
import Particles from "./components/Background/Background";
import DownloadFile from "./components/DownloadFile/DownloadFile";

const App = (props) => (
  <div>
    <Tutorial />
    <DownloadFile />
    <Particles />
    <MyTerminal />
  </div>
);

export default App;
