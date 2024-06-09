
import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"
import googleAuth from "next-auth/providers/google"

export const authOptions = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        googleAuth({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })

    ],
    callback: {
        async signIn({ account, profile }) {
            if(account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@example.com")
            }

            return true
        }
    },
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }