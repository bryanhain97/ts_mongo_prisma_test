import { Account } from './Account';

type LoginState = {
    loggedIn: boolean,
    id: Account['id'] | undefined
};

export {
    type LoginState
};