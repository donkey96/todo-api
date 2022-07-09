import { RouterContext, Status } from '../deps.ts';

export const getAll = (ctx: RouterContext<any>) => {
  ctx.response.status = Status.OK;
  ctx.response.body = {
    todos: [],
  }
}