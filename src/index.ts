import { authRoutes } from '@server/routes/auth'
import { Hono } from 'hono'

const app = new Hono()

app.route('/', authRoutes)

export default app
