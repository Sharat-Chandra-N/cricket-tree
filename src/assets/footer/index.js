import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "20px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>{`© ${new Date().getFullYear()}  Copyright: Karnataka Arya Vysya Vasavi Yuvajana Sangha, KG Nagar, Bangalore `}</div>
    </div>
  );
};

export default Footer;
