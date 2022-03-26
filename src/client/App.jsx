import Head from "next/head";
import { signOut } from "next-auth/react";

import Header from "@/client/Header";

const App = (props) => {
  return (
    <div>
      <Head>
        <title>Huntin</title>
      </Head>

      <Header />
    </div>
  )
};

export default App;
