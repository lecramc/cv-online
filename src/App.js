import React from "react";

const App = (props) => (
  <div>
    <HeaderContainer />

    <Page data={props.pageStuff} />

    <Footer {...props.propsRelevantToFooter} />
  </div>
);

export default App;
