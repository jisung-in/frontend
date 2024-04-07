import NextAuth from "next-auth";
import KakaoProvider from "@auth/core/providers/kakao";
import { useSession } from "next-auth/react";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  providers: [
    KakaoProvider({
      clientId: `${process.env.KAKAO_CLIENT_ID}`,
      clientSecret: `${process.env.KAKAO_CLIENT_SECRET}`,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user;

      console.log(name, email, image);
      return true;
    },
  },
});
