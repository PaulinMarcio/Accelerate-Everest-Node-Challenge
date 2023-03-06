import "reflect-metadata";

import { CreateUserRepository } from "../useCases/CreateUser/CreateUser";
import { CreateUserService } from "../useCases/CreateUser/CreateUserService";
import { user } from "@domain/user/UserMockTest";
import { User } from "@entities/User";

const createUserRepository = new CreateUserRepository();
const createUserService = new CreateUserService(createUserRepository);
const userDataInstance = new User(user);

describe('Testes do create user service', () => {
    const userTest = createUserService.execute(userDataInstance);
    test('Retorno de propriedade', () => {
        expect(userTest).toHaveProperty('props')
    })
    it('Should be an instance of User', () => {
        expect(userTest).toBeInstanceOf(User)
    })
    it('Should be of type String', () => {
        expect(typeof userTest.props.email).toEqual('string')
    })
})
