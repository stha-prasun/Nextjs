"use client" //client side ma use state, use effect, console.log or any kaam garna use client use garnu parxa
import React, { useState } from "react";

const page = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      count: {count}
      <br />
      <button onClick={() => setcount(count + 1)}>Click Me</button>
    </div>
  );
};

export default page;
