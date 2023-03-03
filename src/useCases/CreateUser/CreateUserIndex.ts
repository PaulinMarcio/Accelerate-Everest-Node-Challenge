import { CreateUserController } from '../../presentation/controllers/create/CreateUserController';

import { container } from 'tsyringe'
import { CreateUserRepository } from '@repository/CreateUser';

const createUserController = new CreateUserController(
    container.resolve(CreateUserRepository)
);

export { createUserController };
