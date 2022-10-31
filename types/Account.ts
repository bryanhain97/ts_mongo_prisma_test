interface Account {
    id: string,
    username: string,
    password: string,
    email: string,
};

interface NewAccount extends Omit<Account, 'id'> {
    createdAt?: Date | undefined
}

type AccountWithoutId = Omit<Account, 'id'>


export {
    type AccountWithoutId,
    type NewAccount,
    type Account
};