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

        const userDefault = process.env.DEFAULT_USER
        const passDefault = process.env.DEFAULT_PASSWORD
        const nameDefault = process.env.DEFAULT_NAME

        if(userDefault === credentials.email && passDefault === credentials.password){

          return {
            id:'1',
          name: nameDefault,
          }
        }
      return null
      }
    }),
  ],
})