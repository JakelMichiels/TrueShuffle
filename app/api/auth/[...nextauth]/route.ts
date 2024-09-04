import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

import SpotifyProvider from "next-auth/providers/spotify";

// async function refreshAccessToken(token: JWT): Promise<JWT> {
//   try {
//     const url = "https://accounts.spotify.com/api/token";
//     const basicAuth = Buffer.from(
//       `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//     ).toString("base64");

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Authorization: `Basic ${basicAuth}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         grant_type: "refresh_token",
//         refresh_token: token.refreshToken as string,
//       }),
//     });

//     const refreshedTokens = await response.json();

//     if (!response.ok) {
//       throw refreshedTokens;
//     }

//     return {
//       ...token,
//       accessToken: refreshedTokens.access_token,
//       expiresAt: Date.now() + refreshedTokens.expires_in * 1000,
//       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
//     };
//   } catch (error) {
//     console.error("Error refreshing access token", error);
//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }
export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "user-read-currently-playing",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: JWT; account: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.expiresAt = (account.expires_at as number) * 1000;
        token.refreshToken = account.refresh_token;
      }
      return token;
      // if (Date.now() < (token.expiresAt as number)) {
      //   return token;
      // }

      // return refreshAccessToken(token);
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.token = token;

      session.error = token.error;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
