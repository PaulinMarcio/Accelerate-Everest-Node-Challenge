import { users } from "../../domain/user/User";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repository/ICreateUser";

export class CreateUserRepository implements ICreateUserRepository {

    create(user: User): User {
        users.push(user)
        return user
    }
}
