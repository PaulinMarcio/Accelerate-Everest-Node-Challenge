import { CreateUserController } from './CreateUserController';

import { container } from 'tsyringe'
import { CreateUserRepository } from '@repository/CreateUser';

const createUserController = new CreateUserController(
    container.resolve(CreateUserRepository)
);

export { createUserController };
