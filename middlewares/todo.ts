import { RouterContext, Status } from '../deps.ts';
import { todoModel } from '../models/mod.ts';
import { getParams, handleError, handleOK } from './utils.ts';

export const getAll = async (ctx: RouterContext<any>) => {
  const todos = await todoModel.getAll();
  handleOK(ctx, todos);
};

export const get = async (ctx: RouterContext<any>) => {
  const params = await getParams(ctx);
  const [todo, error] = await todoModel.get(params);

  if (error) {
    return handleError(ctx, error);
  }

  handleOK(ctx, todo);
};