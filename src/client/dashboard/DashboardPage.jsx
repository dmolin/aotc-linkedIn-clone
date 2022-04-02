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

      <main className="flex justify-center gap-x-5 px-4 lg:px-0 py-6 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row gap-5 flex-grow">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <div className="flex-1 li-panel p-4">
            some content
          </div>
        </div>
        {/* widgets */}
      </main>
      <button className="bp4-button mt-8" onClick={() => signOut()}>Sign out</button>
    </div>
  )
};

export default DashboardPage;
