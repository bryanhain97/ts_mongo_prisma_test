import { signOut } from 'next-auth/react';


const LogOut = () => {
    return (
        <button onClick={() => signOut()}>
            Log Out
        </button>
    );
};

export default LogOut;