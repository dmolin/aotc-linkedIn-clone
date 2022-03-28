import { getProviders } from "next-auth/react";

export async function getServerSideProps (context) {
  const providers = await getProviders();

  return {
    props: { providers }
  };
}

export { default } from "@/client/signIn/LoginPage"
