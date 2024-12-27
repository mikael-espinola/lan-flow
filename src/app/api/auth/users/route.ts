import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

  const prisma = new PrismaClient();

  export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      const {email, name, last_name, permission, password} = body;

      if (!email || !name || !permission || !password) {
        return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
      }

      const crypto_password = await bcrypt.hash(password, 10)

      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          last_name,
          permission,
          hashed_password: crypto_password
        }
      });

      return NextResponse.json(newUser, { status: 201 });

    } catch (error) {

      return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
      
    } finally {
      await prisma.$disconnect();
    }

    }