import "reflect-metadata";

import { CreateUserRepository } from "../useCases/CreateUser/CreateUser";
import { CreateUserService } from "../useCases/CreateUser/CreateUserService";
import { user } from "@domain/user/UserMockTest";

const createUserRepository = new CreateUserRepository();
const createUserService = new CreateUserService(createUserRepository);

describe('Testes do create user service', () => {
    const userTest = createUserService.execute(user);
    test('Retorno de propriedade', () => {
        expect(userTest).toHaveProperty('email')
    })
})
