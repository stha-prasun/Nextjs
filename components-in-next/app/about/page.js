import Script from "next/script";
import React from "react";

const about = () => {
  return (
    <div>
      {/* Script tag aafno page ma js execute garna use hunxa like google analytics ko js or ads */}
      <Script>{' alert("Hello") '}</Script>
      <div>I am about</div>
    </div>
  );
};

export default about;
