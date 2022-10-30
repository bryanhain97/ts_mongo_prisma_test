import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { prisma } from '../_db';
import { Account as DbAccount} from '@types';
import { DefaultUser } from 'next-auth/core/types';

interface ReturnUser extends DefaultUser {
    username: string
}

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
                const returnUser: ReturnUser = (({
                    password,
                    createdAt,
                    ...rest
                }) => ({ ...rest }))(dbAccountFound); // delete password and createdAt prop;
                return returnUser;
            }
        }),
    ],
    pages: {
        'signIn': '/',
        'signOut': '/auth/signout',
        // 'error': '/auth/error'
    }
};

export default NextAuth(authOptions);