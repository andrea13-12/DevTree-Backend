import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import router from './router.js'
import { connectDB } from './config/db.js'
import { corsConfig } from './config/cors.js'

connectDB()

const app = express()

// Cors
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

app.use('/', router)

export default app
