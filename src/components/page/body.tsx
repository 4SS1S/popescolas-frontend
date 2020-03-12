import React from "react";

import { BodyComponent } from "./styles";
import LeftMenu from "./left-menu";

const Body: React.FC = ({ children }) => {
  return (
    <BodyComponent>
      <LeftMenu />
      {children}
    </BodyComponent>
  );
};

export default Body;
