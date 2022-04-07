import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
import '@/styles/globals.css'
import Head from "next/head";

import AppLayout from "@/client/layouts/AppLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component?.layout || AppLayout;
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Attack of the clones - LinkedIn clone</title>
        </Head>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp
