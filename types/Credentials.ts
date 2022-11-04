import { User } from 'next-auth';


export type Credentials = {
    username: User['name'],
    email: User['email']
}
