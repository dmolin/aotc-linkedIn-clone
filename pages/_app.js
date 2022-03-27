import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Attack of the clones - LinkedIn clone</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
