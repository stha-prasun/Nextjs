import React from "react";

const Page = async ({ params }) => {
  const resolvedParams = await params;
  console.log(resolvedParams);

  return (
    <div>
      For multiple slugs such as /about/one/two, use the ... operator here
    </div>
  );
};

export default Page;
