import { getProviders, getSession } from "next-auth/react";

export async function getServerSideProps (context) {
  const providers = await getProviders();
  // since we want to SSR this page, we also fetch the session that will be provided to the client
  // via useSession() and the SessionProvider
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/app",
        permanent: false
      }
    };
  }

  return {
    props: { providers, session }
  };
}

export { default } from "@/client/signIn/SignInPage"
