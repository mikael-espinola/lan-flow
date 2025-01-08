import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

    export async function POST(request: NextRequest) {
        try {
        const body = await request.json();
        const {email, name, last_name, password, birthday} = body;

        if (!email || !name || !password) {
            return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
        }

        const crypto_password = await bcrypt.hash(password, 10)

        const creditos = "0"
        const permission = 'USER'
        const status = 'OFFLINE'


        const newUser = await prisma.client.create ({
            data: {
            email,
            name,
            last_name,
            permission,
            hashed_password: crypto_password,
            creditos,
            status,
            birthday
            }
        });

        return NextResponse.json("Usuário criado com sucesso!", { status: 201 });

        } catch (error) {

        return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
        
        } finally {
        await prisma.$disconnect();
        } 

    }

    export async function GET() {
        try {
            const clients = await prisma.client.findMany()

            if(clients.length === 0) {
                return NextResponse.json({error: "Sem clientes cadastrados"}, {status: 404})
            }

            const filteredClients = clients.map((user) => (
                {
                    id: user.id,
                    createdAt: user.createdAt,
                    creditos: user.creditos,
                    email: user.email,
                    last_name: user.last_name,
                    name: user.name,
                    status: user.status,
                    updatedAt: user.updatedAt,
                    birthday: user.birthday,
                    nickname: user.nickname
                }
            ))

            return NextResponse.json(filteredClients, {status: 200})
        } catch (error) {
            return NextResponse.json({ error: 'Erro na busca dos usuários' }, { status: 500 });
        } finally {
            await prisma.$disconnect()
        }
    }

    export async function PUT(request: NextRequest){
        const body = await request.json()
        const {email, name, last_name, password, creditos, userId} = body;

        const updateData: any = {};

        if (email) updateData.email = email;
        if (name) updateData.name = name;
        if (last_name) updateData.last_name = last_name;
        if (creditos) updateData.creditos = creditos;
        if (password) updateData.hashed_password = password;        
        try {
             
            const updatedClient = await prisma.client.update({
                where: {
                    id: userId
                },
                data: updateData
            })

        return NextResponse.json({ message: 'Requisição recebida com sucesso!', userId });


        } catch (error) {
            return NextResponse.json({ error: 'Erro ao atualizar o usuário' }, { status: 500 });
        } finally {
            await prisma.$disconnect()
        }
    }