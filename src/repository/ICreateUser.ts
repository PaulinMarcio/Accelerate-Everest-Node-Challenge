import { User } from "../entities/User"

export interface ICreateUserRepository {
    create(user: User): void;
}
