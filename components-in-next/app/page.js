import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      I am home
      <div>
        <Link href="/about">Redirect To About</Link>
      </div>
      <Image
        alt="test image"
        src="/image.png"
        height={100}
        width={100}
      />
    </div>
  );
};

export default page;
