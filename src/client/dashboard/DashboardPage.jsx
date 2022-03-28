import Head from "next/head";
import { signOut } from "next-auth/react";

import Header from "@/client/Header";

const DashboardPage = (props) => {
  return (
    <div>
      <Header />

      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
};

export default DashboardPage;
