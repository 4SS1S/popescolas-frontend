import React, { useEffect } from "react";

const Logout: React.FC = () => {
  useEffect(() => {
    localStorage.clear();

    window.location.replace("/");
  }, []);

  return <></>;
};

export default Logout;
