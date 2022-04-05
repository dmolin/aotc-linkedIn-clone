import { getSession } from "next-auth/react";

// in case we want to do SSR on this page:
// export async function getServerSideProps (context) {
//   const session = await getSession(context);
//
//   return {
//     props: { session }
//   };
// }

export { default } from "@/client/feed/FeedPage";
