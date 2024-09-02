import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { db } from "@db/client";
import { z } from "zod";
import { user as userTable } from "@db/schema";
import { errorResponse, successResponse } from "@server/utils/responseUtil";

const UsernamePasswordSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const authRoutes = new Hono()
  .basePath('/auth')
  .post('/register',
    zValidator('json', UsernamePasswordSchema),
    async (c) => {
      const { username, password } = c.req.valid('json')
      try {
        await db.insert(userTable).values({
          username,
          password,
          role: 'user',
        })
      } catch (error) {
        return c.json(errorResponse("错误"))
      }
      return c.json(successResponse("成功"))
    })