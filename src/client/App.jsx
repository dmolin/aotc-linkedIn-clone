import Head from "next/head";
import { signOut } from "next-auth/react";

import Header from "@/client/Header";

const App = (props) => {
  return (
    <div>
      <Header />
    </div>
  )
};

export default App;
