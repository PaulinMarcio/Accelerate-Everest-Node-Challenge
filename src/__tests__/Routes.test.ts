import request from "supertest"
import { app } from "../server"
import { user } from "../domain/user/UserMockTest"

describe("POST /create-user", () => {
    test("Deve inserir o usuário e dar ok", async () => {

        const response = await request(app)
            .post("/create-user")
            .send(user)

        console.log(response.body)
        expect(response.header['content-type']).toMatch("application/json")
        expect(response.status).toEqual(200)
    })

    test("Deve dar erro", async () => {
        const response = await request(app)
            .post("/create-user")
            .send()

        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty("erro")
    })

})