interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [];

export function getUsers(): User[] {
    return users;
}

