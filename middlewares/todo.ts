import { RouterContext, Status } from '../deps.ts';
import { todoModel } from '../models/mod.ts';

export const getAll = async (ctx: RouterContext<any>) => {
  const todos = await todoModel.getAll();
  ctx.response.status = Status.OK;
  ctx.response.body = {
    data: todos,
  };
};