import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from './_db';
import bcrypt from 'bcrypt';


const SALTROUNDS = 10;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { body: registerAccount } = req;
    try {
        const alreadyRegistered = await prisma.account.findFirst({ where: { email: registerAccount.email } });
        if (!alreadyRegistered) {
            const hashedPassword = await bcrypt.hash(registerAccount.password, SALTROUNDS);
            // check encrypted password: await bcrypt.compare(plainPW, hashedPW) ==> bool
            const savedAccount = await prisma.account.create({
                data: {
                    ...registerAccount,
                    password: hashedPassword,
                }
            });
            res.status(200).json(savedAccount);
            return;
        }
        else {
            throw new Error('Account with email already exists.');
        }
    } catch ({ message }) {
        res.status(400).json({ message });
    }
};