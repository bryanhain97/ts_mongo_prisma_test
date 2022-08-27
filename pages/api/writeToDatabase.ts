import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

interface User {
    email: string,
    name: string
};

const prisma = new PrismaClient()

export const writeToDatabase = async ({ email, name }: User) => {
    const USER = await prisma.user.create({
        data: {
            email,
            name
        }
    })
    return USER
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.json('written to database')
}