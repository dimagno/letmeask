import{ fastify } from "fastify"
import {sql} from "./db/connection.ts"
import { serializerCompiler,validatorCompiler,type ZodTypeProvider } from "fastify-type-provider-zod"
import {fastifyCors} from "@fastify/cors"
import {env} from './env.ts'
const app= fastify().withTypeProvider<ZodTypeProvider>();
app.register( fastifyCors, {
    origin :"localhost:5173",
})
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.get('/health', ()=>{
    return "OK!";
})
app.listen({port: env.PORT}).then(()=>{
    console.log("PORT:", env.PORT)
    console.log("server runing!")
})