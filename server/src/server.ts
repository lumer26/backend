import Fastify from 'fastify'
import cors from '@fastify/cors'
import { userRoutes } from './routes/userRoutes.js'
import dotenv from 'dotenv'
dotenv.config()


const app = Fastify({ logger: true })

await app.register(cors, {
  origin: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

app.register(userRoutes)

app.get('/', async (request, reply) => {
  return { message: 'Backend Fastify funcionando!' }
})

const start = async () => {
  try {
    await app.listen({ port: 3001, host: '0.0.0.0' })
    console.log('🚀 Server ready at http://localhost:3001')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}



start()

