interface Account {
    id: string,
    username: string,
    password: string,
    email: string,
};

interface RegisterAccount extends Account {
    createdAt?: Date | undefined
}

export {
    type RegisterAccount,
    type Account
};