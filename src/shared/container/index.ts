import { container } from "tsyringe";
import { CreateUserRepository } from "../../useCases/CreateUser/CreateUser";
import { ICreateUserRepository } from "@repository/ICreateUser";

container.registerSingleton<ICreateUserRepository> (
    "CreateUserRepository",
    CreateUserRepository
);
