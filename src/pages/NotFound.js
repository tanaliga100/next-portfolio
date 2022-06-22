import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div>Ooooppppsss...</div>
      <p>This page is under maintenance</p>
      <Link href="/pages/NotFound">
        <a>Go Back</a>
      </Link>
    </>
  );
};

export default NotFound;
