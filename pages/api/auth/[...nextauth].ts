import NextAuth from "next-auth"
import SalesforceProvider from "next-auth/providers/salesforce"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
     SalesforceProvider({
        clientId: process.env.SALESFORCE_CLIENT_ID,
        clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
        authorization:  "https://test.salesforce.com/services/oauth2/authorize",
        token: "https://test.salesforce.com/services/oauth2/token",
        userinfo: "https://test.salesforce.com/services/oauth2/userinfo",
  })
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
})
