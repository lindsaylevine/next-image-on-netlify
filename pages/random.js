import React from "react";

export default function Home() {
  return (
    <>
        <h1>ssr</h1>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
    },
  };
}
