"use client";

import { Form } from "../components/form/form";
// import { withReduxVar } from "./store-provider";

export default function Home() {
  return (
    <>
      <header className="py-4">
        <h1 className="text-center text-2xl">Selamat Datang</h1>
      </header>
      <br />
      <Form />
    </>
  );
}

// export default withReduxVar(Home);
