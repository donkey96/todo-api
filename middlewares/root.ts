import { RouterContext, Status } from '../deps.ts';

export const getHome = (ctx: RouterContext<any>) => {
  ctx.response.status = Status.OK;
  ctx.response.body = 'Todo list API with 🦕';

};