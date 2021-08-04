import React from "react";

import Tutorial from "./components/Tutorial/Tutorial";
import MyTerminal from "./components/Terminal/Terminal";
import Particles from "./components/Background/Background";

const App = (props) => (
  <div>
    <Tutorial />
    <Particles />
    <MyTerminal />
  </div>
);

export default App;
