import Head from "next/head";
import { signOut } from "next-auth/react";

import Header from "@/client/Header";
import Sidebar from "@/client/dashboard/Sidebar";

const DashboardPage = (props) => {
  return (
    <div>
      <Head>
        <title>Feed | LinkedIn (clone)</title>
      </Head>
      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12 ">
        <div className="flex flex-col md:flex-row gap-5">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <div className="flex-1">content</div>
        </div>
        {/* widgets */}
      </main>
      <button className="bp4-button mt-8" onClick={() => signOut()}>Sign out</button>
    </div>
  )
};

export default DashboardPage;
