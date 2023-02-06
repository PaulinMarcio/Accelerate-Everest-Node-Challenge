import { users } from "../domain/user/UserMock";
import { User } from "../entities/User";
import { ICreateUserRepository } from "./ICreateUser";

export class CreateUserRepository implements ICreateUserRepository {

    create(user: User): void {
        users.push(user)
    }
}