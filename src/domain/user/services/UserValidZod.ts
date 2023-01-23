import { z } from "zod";

const userSchema = z.object({
    username: z.string(),
})

type user = z.infer<typeof userSchema>

const user = { username : "a"}

console.log(userSchema.parse(user))