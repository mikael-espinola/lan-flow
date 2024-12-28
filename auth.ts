import prisma from "@/utils/connect";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
 
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

        const {email, password} = credentials

        if (typeof email !== 'string' || typeof password != 'string') {
          throw new Error('Tipagem de Email inválido ou senha inválida');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: email
          }
        })

        if(!user || !(await bcrypt.compare(password, user.hashed_password))){
          NextResponse.json({error: 'Usuário ou senha inválidos'}, {status: 401});
          return null
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email
        }

       
      }
    }),
  ],
})