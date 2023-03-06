import "reflect-metadata"

import { User } from '@entities/User';
import { user } from "../domain/user/EmptyMockTest"
import { CreateUserService } from '../useCases/CreateUser/CreateUserService';
import {CreateUserController} from '../useCases/CreateUser/CreateUserController'
import { CreateUserRepository } from '../useCases/CreateUser/CreateUser';
import { Request, Response } from 'express';


const userRepository = new CreateUserRepository();
const userService = new CreateUserService(userRepository)
const createUser = new CreateUserController(userService)

const mockUser = new User(user)
const mockReq = {
 body: mockUser
} as Request
const mockRes = {
    json: mockReq.body,
    status: 404
} as unknown as Response

describe('Retorno de erro do controller', () => {
    
    createUser.handle(mockReq, mockRes)

    test('Deve retornar erro caso o usuário esteja vazio', () => {
        expect(createUser.handle).toThrow(TypeError)
    })
})
