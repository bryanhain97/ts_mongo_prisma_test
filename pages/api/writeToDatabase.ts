import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from './db'
interface User {
    email: string,
    name: string
};


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