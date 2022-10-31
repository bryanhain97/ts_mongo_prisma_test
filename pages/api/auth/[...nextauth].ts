import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { prisma } from '../_db';
import { Account as DbAccount } from 'types';
import { User } from 'next-auth/core/types';


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    // maxAge @default: 86000 ==> 1 day
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { username: reqUsername, password: reqPassword } = credentials as {
                    username: DbAccount['username'],
                    password: DbAccount['password']
                };
                const dbAccountFound = await prisma.account.findFirst({ where: { username: reqUsername } });
                if (!dbAccountFound) { throw new Error('Username doesn\'t exist!'); }
                const { password: hashedPassword } = dbAccountFound;
                const matchPassword = await compare(reqPassword, hashedPassword);
                if (!matchPassword) { throw new Error('Password incorrect!'); }
                const user = (({
                    id,
                    username,
                    email
                }: DbAccount
                ): User => ({ id, name: username, email, image: null }))(dbAccountFound); // image prop unhandled yet, add to db schema?
                return user;
            }
        }),
    ],
    pages: {
        'signIn': '/auth/signin',
        'signOut': '/auth/signout',
        // 'error': '/auth/error'
    }
};

export default NextAuth(authOptions);