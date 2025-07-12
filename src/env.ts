import {z} from 'zod'
const envEschema =  z.object({
    PORT: z.coerce.number().default(3333),
})
export const  env= envEschema.parse(process.env)
    