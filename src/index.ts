import { authRoutes } from '@server/routes/auth'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('/api/*', logger()).use('/api/*', cors()).route('/api', authRoutes)

export default app
