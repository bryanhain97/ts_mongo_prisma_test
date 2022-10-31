import { signOut } from 'next-auth/react';

const LogOut = () => {
    return (
        <button onClick={() => signOut({callbackUrl: 'http://localhost:3000/'})}>
            Log Out
        </button >
    );
};

export default LogOut;