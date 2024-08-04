import React from "react";

const Header = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#0e2238",
        color: "#fff",
      }}
    >{`KVCL ${new Date().getFullYear()}`}</div>
  );
};

export default Header;
