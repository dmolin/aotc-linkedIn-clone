import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "@/server/mongodb";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
      id: "credentials",
      authorize: async (credentials, _req) => {
        console.log("CREDENTIALS", credentials);
        // return a user if we can login (db lookup)
        if (credentials.email === "johndoe@example.com" && credentials.password === "password") {
          console.log("CREDENTIALS MATCHED!");
          return {
            id: "1",
            name: "John",
            email: "johndoe@example.com"
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/"
  },
  session: {
    strategy: "jwt"
  },
  debug: true
});
