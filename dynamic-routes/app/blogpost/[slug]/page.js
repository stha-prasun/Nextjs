import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;
  return <div>Page: {slug}</div>;
};

export default Page;
