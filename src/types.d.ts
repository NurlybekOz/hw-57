export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    checked: boolean;
}
export interface UserMutation {
    name: string;
    email: string;
    role: string
}