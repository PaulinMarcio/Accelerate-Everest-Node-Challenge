import "reflect-metadata";

import { CreateUserRepository } from "./src/useCases/CreateUser/CreateUser";
import { CreateUserService } from "./src/useCases/CreateUser/CreateUserService";
import { user } from "@domain/user/UserMockTest";

const createUserRepository = new CreateUserRepository();
const createUserService = new CreateUserService(createUserRepository);

describe('Testes do create user controller', () => {
    const userTest = createUserService.execute(user);
    test('Retorno de Json', () => {
        expect(userTest).toHaveProperty('email')
    })
})
