import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
});
