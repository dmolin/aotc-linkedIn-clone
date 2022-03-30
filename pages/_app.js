import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
import '@/styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Attack of the clones - LinkedIn clone</title>
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp
