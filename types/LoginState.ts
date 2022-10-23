import { Account } from './Account';

type LoginState = {
    loggedIn: boolean,
    id: Pick<Account, 'id'> | undefined
};

export {
    type LoginState
};