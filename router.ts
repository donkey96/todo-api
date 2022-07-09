import { Router, Status } from './deps.ts';

export const router = new Router();

router.get("/", (ctx) => {
  console.log(ctx);
  ctx.response.status = Status.OK;
  ctx.response.body = "Todo list API with 🦕";
})
