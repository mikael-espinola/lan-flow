import database from "@/database/data"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login"
  },
  providers: [
    Credentials({

      credentials: {
        email: {label: 'Username', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      authorize: async (credentials) => {
        if(!credentials){
            return null
        }

        const user = database.find(user => user.email === credentials.email && user.password === credentials.password)

        if(user) {
          return {
            id: user.id,
          name: user.name,
          email: user.email,
          }
        }
        return null
      },
    }),
  ],
})