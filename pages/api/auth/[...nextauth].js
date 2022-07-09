import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }),
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            return url
        },
        async session({ session, user, token }) {
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    },
    secret: process.env.JWT_SECRET
})