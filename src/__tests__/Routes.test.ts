import request from "supertest"
import { app } from "../server"
import { user } from "../domain/user/UserMockTest"

describe("POST /create-user", () => {
    test("Deve inserir o usuário e dar ok", async () => {

        const response = await request(app)
            .post("/api/create-user")
            .send(user)

        expect(response.header['content-type']).toMatch("application/json")
        expect(response.status).toEqual(200)
        expect(response.body.email).toEqual(response.body.emailConfirmation)
    })

    test("Deve dar erro", async () => {
        const response = await request(app)
            .post("/api/create-user")
            .send()

        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty("erro")
    })

})

describe('/GET user', () => {
    test("Deve pegar a lista de usuários", async () => {
        const response = await request(app)
        .get("/api/list-user")

        expect(response.status).toEqual(201)

    })
})