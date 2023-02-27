import Request from "supertest"
import {app} from "../server"
import {user} from "../domain/user/UserMockTest"

describe("POST /create-user", () =>{
    describe("Quando o usuário inserir os dados corretos", ()=>{
        //"Deve salvar o usuário no servidor"

        //Deve responder com um json com o usuário

        test("Deve inserir o usuário e dar ok", async () => {
            const response = await Request(app).post("/create-user").send(user)
            expect(response.header['content-type']).toMatch("application/json")
            expect(response.status).toEqual(200)
        })

        test("Deve dar erro", async () => {
            const response = await Request(app).post("/create-user").send()
            expect(response.status).toEqual(404)
            expect(response.body).toHaveProperty("erro")
        })
    })
})