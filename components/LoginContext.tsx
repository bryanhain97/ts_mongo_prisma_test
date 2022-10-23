import React, { createContext, Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { LoginState } from 'types';


const DEFAULT_LOGIN_STATE: LoginState = {
    loggedIn: false,
    id: undefined,
};

export const LoginContext = createContext<{
    loginState: LoginState,
    setLoginState: Dispatch<SetStateAction<LoginState>>
}>({
    loginState: DEFAULT_LOGIN_STATE,
    setLoginState: () => { }
});

export default function LoginContextProvider({ children }: { children: ReactElement }) {
    const [loginState, setLoginState] = useState<LoginState>(DEFAULT_LOGIN_STATE);
    useEffect(() => console.log(loginState), [loginState]);

    return (
        <LoginContext.Provider value={{ loginState, setLoginState }}>
            {children}
        </LoginContext.Provider>
    );
};

