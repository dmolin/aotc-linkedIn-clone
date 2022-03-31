import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp
