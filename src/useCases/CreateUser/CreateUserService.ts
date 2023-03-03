import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repository/ICreateUser";

@injectable()
export class CreateUserService {

    constructor(
        @inject("CreateUserRepository")
        private createUserImplementation: ICreateUserRepository
    ) { }

    execute(userData: User) {
        this.createUserImplementation.create(userData)
        return userData
    }

}