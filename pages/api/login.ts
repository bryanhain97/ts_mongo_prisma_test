import bcrypt from 'bcrypt';
import { prisma } from './_db';
import { NextApiRequest, NextApiResponse } from 'next';
import { deepStrictEqual } from 'assert';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { body: account } = req;
    try {
        const foundAccount = await prisma.account.findFirst({ where: { username: account.username } });
        if (!foundAccount) {
            throw new Error('no account found with username');
        }
        const { password: hashedPassword } = foundAccount;
        const matchPassword = await bcrypt.compare(account.password, hashedPassword);
        if (!matchPassword) {
            throw new Error('incorrect password');
        }
        // logged in as foundAccount, send JWT ?;
    } catch (e) {
        res.status(400).json(e);
    }
};