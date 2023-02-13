import "reflect-metadata";

import { user } from '../domain/user/UserMockTest'
import { CreateUserController } from "../useCases/CreateUser/CreateUserController";
import { CreateUserRepository } from "../repository/CreateUser";
import { Request, Response } from 'express';

const mockReq: Request = { 
    body: user
} as Request;

const mockRes: Response = {
    json: mockReq.body,
    status: 201
} as unknown as Response;

const createUserRepository = new CreateUserRepository();
const createUserController = new CreateUserController(createUserRepository);

describe('Testes do create user controller', () => {
    const response = createUserController.handle(mockReq, mockRes);

    test('Retorno de Json', () => {
        expect(response).toHaveProperty('json')
    })

    test('Retorno de Status', () => {
        expect(response).toHaveProperty('status')
    })
})