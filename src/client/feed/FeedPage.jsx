import Head from "next/head";

import Header from "@/client/Header";
import Sidebar from "@/client/feed/Sidebar";
import Feed from "@/client/feed/Feed";

const FeedPage = (props) => {
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
          <Feed />
        </div>
        {/* widgets */}
      </main>
    </div>
  )
};

export default FeedPage;
