import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { db } from '@db/client'
import { z } from 'zod'
import { user as userTable } from '@db/schema'
import { errorResponse, successResponse } from '@server/utils/responseUtil'
import { eq } from 'drizzle-orm'
import { HTTPException } from 'hono/http-exception'

const UsernamePasswordSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const authRoutes = new Hono()
  .basePath('/auth')
  .post('/register', zValidator('json', UsernamePasswordSchema), async (c) => {
    // TODO: 把全局错误处理写成中间件，处理包括验证错误在内的所有异常
    const { username, password } = c.req.valid('json')
    try {
      await db.insert(userTable).values({
        username,
        password,
        role: 'user',
      })
    } catch (error) {
      return c.json(errorResponse('数据库错误', 500))
    }

    return c.json(successResponse('注册成功'))
  })
  .post('/login', zValidator('json', UsernamePasswordSchema), async (c) => {
    const { username, password } = c.req.valid('json')
    const user = await db
      .select()
      .from(userTable)
      .where(eq(userTable.username, username))

    if (!user.length || user[0].password !== password) {
      c.status(401)
      return c.json(errorResponse('用户名或密码不正确', 401))
    }

    return c.json(successResponse(null, `Hello, ${username}`))
  })
