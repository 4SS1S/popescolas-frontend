import React from "react";

import { Navbar, Body } from "./components/page";

const BodyPage: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Body>{children}</Body>
    </>
  );
};

export default BodyPage;
