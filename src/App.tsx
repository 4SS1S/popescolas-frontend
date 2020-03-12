import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import Routes from "./routes";
import Body from "./body";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <div className="App">
          <Routes />
        </div>
      </Body>
    </ThemeProvider>
  );
}

export default App;
