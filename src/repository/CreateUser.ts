import { users } from "../domain/user/User";
import { User } from "../entities/User";
import { ICreateUserRepository } from "./ICreateUser";

export class CreateUserRepository implements ICreateUserRepository {

    create(user: User): void {
        users.push(user)
    }
}
