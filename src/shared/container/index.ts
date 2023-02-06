import { container } from "tsyringe";
import { CreateUserRepository } from "@repository/CreateUser";
import { ICreateUserRepository } from "@repository/ICreateUser";

container.registerSingleton<ICreateUserRepository> (
    "CreateUserRepository",
    CreateUserRepository
);