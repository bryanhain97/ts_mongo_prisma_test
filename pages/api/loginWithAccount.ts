import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from './_db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('incoming request');
    const { body: saveAccount } = req;
    try {
        const alreadyRegistered = await prisma.account.findFirst({ where: { email: saveAccount.email } });
        if (!alreadyRegistered) {
            const savedAccount = await prisma.account.create({ data: saveAccount });
            console.log('account saved in DB: ', savedAccount);
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




/*
steps:
1. get incoming request;
2. check body of incoming request;
3. check db if email is unique;
4. if unique => create new account;
5. if not unique => send error and set user;
*/