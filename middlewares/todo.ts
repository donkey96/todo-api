import { RouterContext, Status } from '../deps.ts';
import { todoModel } from '../models/mod.ts';
import { getParams } from './utils.ts';

export const getAll = async (ctx: RouterContext<any>) => {
  const todos = await todoModel.getAll();
  ctx.response.status = Status.OK;
  ctx.response.body = {
    data: todos,
  };
};

export const get = async (ctx: RouterContext<any>) => {
  const params = await getParams(ctx);
  const [todo, error] = await todoModel.get(params)

  if (error) {
    ctx.response.status = Status.BadRequest;
    ctx.response.body = {
      error: {
        message: error.message,
        stack: error.stack,
      }
    }
  }
}