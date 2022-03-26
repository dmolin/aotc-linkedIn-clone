import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "@/server/mongodb";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: "/home"
  },
  session: {
    strategy: "database"
  },
  debug: true
});
