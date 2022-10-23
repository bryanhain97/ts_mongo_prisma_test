interface Account {
    id?: string,
    createdAt: Date | undefined,
    username: string,
    password: string,
    email: string,
};

interface SaveAccount extends Account {
    createdAt: Date | undefined
}

export {
    type SaveAccount,
    type Account
};